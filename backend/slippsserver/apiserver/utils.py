# import uuid
# from rest_framework_jwt.settings import api_settings
# from datetime import datetime
# from calendar import timegm
# from .serializers import UserSerializer


import os
import csv
import glob
import psycopg2
from datetime import datetime
import re

from .models import (
    Country,
    Language,
    UserAccount
)

# import the logging library
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)

now = str(datetime.now())

conn = psycopg2.connect("host=localhost dbname=slippsdb user=postgres password=root")
cur = conn.cursor()

script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
rel_path = "csv_samples/"
abs_file_path = os.path.join(script_dir, rel_path)

def process_csv(reader, user, filename):
    # print(reader)
    user_account = UserAccount.objects.get(user_id = user.id)
    # print(filename)

    if len(reader) > 3:
        cur.execute(
            "INSERT INTO apiserver_uploadeddocument (filename, processed_status, uploaded_at, user_account_id) \
            VALUES (%s, %s, %s, %s) RETURNING ID", (filename, "error", now, user_account.id)
        )

        conn.commit()
        return False

    try:
        logger.info(reader)
        # "1.0.0";"2018-03-07T13:03:16.622Z";"fi";"FI"
        line1 = reader[0].decode('utf-8').split(';')
        country_code = Country.objects.get(code=line1[3][1:3]).id
        lang_code = Language.objects.get(code_2=line1[2][1:3]).id
        file_version = line1[0].replace('"', '')
        created_at = line1[1].replace('"', '')

        # Line 2 = reader[1]: ...'[10,",4,2,5,14,",[1,3,9,12,15],",3,4,",4,"]'
        line2 = reader[1].decode('utf-8').split(';')

        description = line2[0].replace('"', '')
        short_desc =  description[0:200] + "..."
        why_relevant = line2[1].replace('"', '')

        # print(description)
        # print(short_desc)
        # print(why_relevant)
        # print(country_code)
        # print(lang_code)
        # print(now)
        # print(file_version)


        cur.execute(
            'INSERT INTO apiserver_event (description, why_relevant, short_desc, country_id, language_id, created_at, updated_at, file_version) \
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s) RETURNING ID', (description, why_relevant, short_desc, country_code, lang_code, now, now, str(file_version))
        )

        event_id = cur.fetchone()[0]

        data = line2[2][1:-1]
        data = data[1:len(data)-3]

        answer_arr = re.split(r'[^\d"A-Za-z!$;\s\[\]]+(?![^\[]*\])', data)

        if len(answer_arr) == 14:
            for idx, val in enumerate(answer_arr):
                answer = val
                question_id = idx + 1

                cur.execute(
                    "INSERT INTO apiserver_eventdetail (answer, event_id, question_id, created_at) \
                    VALUES (%s, %s, %s, %s) RETURNING ID", (answer, event_id, question_id, str(now))
                )

        # Line 3 = reader[2]: 'fi-basic-39'; 'fi-basic-6'
        kw_arr = reader[2].decode('utf-8').split(';')
        for val in kw_arr:
            val = val.replace('"', '')
            text = val.split('-')
            cur.execute("SELECT id from apiserver_keyword WHERE language_code = %s AND kw_id = %s", (text[0], text[2]))
            kw_id = cur.fetchone()[0]

            cur.execute(
                "INSERT INTO apiserver_eventkeyword (event_id, keyword_id, created_at) \
                VALUES (%s, %s, %s) RETURNING ID", (event_id, kw_id, now)
            )

        cur.execute(
            "INSERT INTO apiserver_uploadeddocument (filename, processed_status, uploaded_at, user_account_id) \
            VALUES (%s, %s, %s, %s) RETURNING ID", (filename, "success", now, user_account.id)
        )

        conn.commit()
        return True
    except Exception as e:
        logger.error(e)
        cur.execute(
            "INSERT INTO apiserver_uploadeddocument (filename, processed_status, uploaded_at, user_account_id) \
            VALUES (%s, %s, %s, %s) RETURNING ID", (filename, "error", now, user_account.id)
        )

        conn.commit()

# def jwt_payload_handler(user):
#   username_field = "email"
#   username = user.email

#   payload = {
#       'user_id': user.pk,
#       'username': username,
#       'exp': datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA
#   }
#   if isinstance(user.pk, uuid.UUID):
#       payload['user_id'] = str(user.pk)

#   payload[username_field] = username

#   # Include original issued at time for a brand new token,
#   # to allow token refresh
#   if api_settings.JWT_ALLOW_REFRESH:
#       payload['orig_iat'] = timegm(
#           datetime.utcnow().utctimetuple()
#       )

#   if api_settings.JWT_AUDIENCE is not None:
#       payload['aud'] = api_settings.JWT_AUDIENCE

#   if api_settings.JWT_ISSUER is not None:
#       payload['iss'] = api_settings.JWT_ISSUER

#   return payload

# def jwt_get_username_from_payload_handler(payload):
#   """
#   Override this function if username is formatted differently in payload
#   """
#   return payload.get('email')

# def jwt_response_payload_handler(token, user=None, request=None):
#   return {
#       'token': token,
#       'user': UserSerializer(user, context={'request': request}).data
#   }
