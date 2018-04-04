import os
import csv
import glob
import psycopg2
import datetime
import re


now = datetime.datetime.now()

conn = psycopg2.connect("host=localhost dbname=slippsdb user=postgres")
cur = conn.cursor()

script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
rel_path = "csv_samples/"
abs_file_path = os.path.join(script_dir, rel_path)

country_mapping = {
    'FI': 75,
    'SE': 215,
    'GB': 235 
}

lang_mapping = {
    'fi': 46,
    'en': 40
}

for filename in glob.glob(abs_file_path + "/*.csv"):
    with open(filename) as f:
        reader = list(csv.reader(f, delimiter=';'))
        # Line 0 = reader[0]: '1.0.0', '2018-04-04T10:19:37.559Z', 'fi', 'FI'
        country_code = country_mapping[reader[0][3]]
        lang_code = lang_mapping[reader[0][2]]

        # Line 1 = reader[1]: ...'[10,",4,2,5,14,",[1,3,9,12,15],",3,4,",4,"]'
        description = reader[1][0]
        short_desc =  description[ 0 : 200] + "..."
        why_relevant = reader[1][1]

        cur.execute(
            "INSERT INTO apiserver_event (description, why_relevant, short_desc, country_id, language_id, created_at, updated_at) \
            VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING ID", (description, why_relevant, short_desc, country_code, lang_code, str(now), now)
        )

        event_id = cur.fetchone()[0]

        data = reader[1][2][1:-1].replace('"', '""')
        data = data[ 1 : len(data)-2 ]


        answer_arr = re.split(r'[^\d"A-Za-z!$;\s\[\]]+(?![^\[]*\])', data)

        if len(answer_arr) == 14:
            for idx, val in enumerate(answer_arr):
                answer = val
                question_id = idx + 1

                cur.execute(
                    "INSERT INTO apiserver_eventdetail (answer, event_id, question_id, created_at) \
                    VALUES (%s, %s, %s, %s) RETURNING ID", (answer, event_id, question_id, str(now))
                )

        # Line 2 = reader[2]: 'fi-basic-39', 'fi-basic-6', 'fi-basic-16', 'fi-basic-13', 'fi-basic-41'
        kw_arr = reader[2]
        for val in kw_arr:
            text = val.split('-')
            cur.execute("SELECT id from apiserver_keyword WHERE language_code = %s AND kw_id = %s", (text[0], text[2]))
            kw_id = cur.fetchone()[0]

            cur.execute(
                "INSERT INTO apiserver_eventkeyword (event_id, keyword_id, created_at) \
                VALUES (%s, %s, %s) RETURNING ID", (event_id, kw_id, now)
            )

        conn.commit()

        
    f.close()
