# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import hashlib

from django.conf import settings
from django.db import models, transaction
from django.utils.crypto import get_random_string
from datetime import datetime, timedelta
from django.db.models.signals import post_save, pre_save
from django.contrib.auth import get_user_model

from .doctypes import Event as EventDoc

# from django.contrib.auth.models import AbstractUser
User = get_user_model()

class Language(models.Model):
    code_2 = models.CharField(max_length=2, unique=True)
    code_3 = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name

class Country(models.Model):
    code = models.CharField(max_length=2, unique=True)
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    question_pos = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.question_text

class Choice(models.Model):
    """
    Stores a single choice entry, related to :model:`question` and
    """
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_num = models.IntegerField()
    choice_text = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        unique_together = ("question", "choice_num", "choice_text")

class Keyword(models.Model):
    language_code = models.CharField(max_length=2)
    category = models.CharField(max_length=200)
    kw_id = models.IntegerField()
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

class UserRegistrationManager(models.Manager):
    @transaction.atomic
    def create_user(self, data, is_active=False):
        """
        Create a new user and its associated ``UserProfile``.
        Also, send user account activation (verification) email.

        """

        password = data.pop('password')
        user = User(
            email = data['email'],
            username = data['email'],
            first_name = data['first_name'],
            last_name = data['last_name'],
        )
        user.is_active = is_active
        user.set_password(password)
        user.save()

        user_account = self.create_account(
            user = user,
            data = data
        )

        # if send_email:
        #     user_profile.send_activation_email(site)  # To be made asynchronous in production

        return user

    def create_account(self, user, data):
        """
        Create UserProfile for give user.
        Returns created user profile on success.

        """

        print(data)

        hash_input = (get_random_string(8) + user.email).encode('utf-8')
        verification_code = hashlib.sha1(hash_input).hexdigest()
        # verification_code_expired = datetime.now() + timedelta(
        #     getattr(settings, 'VERIFICATION_CODE_EXPIRE_DAYS', 4)
        # )

        user_account = data['user_account']

        if not 'dob' in user_account:
            user_account['dob'] = None
        if not 'gender' in user_account:
            user_account['gender'] = None
        if not 'phone' in user_account:
            user_account['phone'] = None

        account = self.create(
            user = user,
            dob = user_account['dob'],
            gender = user_account['gender'],
            occupation = user_account['occupation'],
            work_place = user_account['work_place'],
            phone = user_account['phone'],
            verification_code = verification_code,
            # verification_code_expired = verification_code_expired
        )

        return account

class UserAccount(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    # email = models.EmailField(unique=True)
    # hashed_pass = models.CharField(max_length=500)
    # first_name = models.CharField(max_length=200)
    # last_name = models.CharField(max_length=200)
    dob = models.DateTimeField("date of birth", null=True, blank=True)
    gender = models.CharField(max_length=50, null=True, blank=True)
    occupation = models.CharField(max_length=200)
    work_place = models.CharField(max_length=200)
    phone = models.CharField(max_length=20, null=True, blank=True)
    # is_active = models.BooleanField(default=False)
    verification_code = models.CharField(max_length=200, blank=True)
    verification_code_expired = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = UserRegistrationManager()

# def generate_verification_code(sender, instance, **kwargs):
#     if not instance.pk:
#         # Execute for newly created user only
#         hash_input = (get_random_string(8) + instance.email).encode('utf-8')
#         instance.verification_code = hashlib.sha1(hash_input).hexdigest()
#         instance.verification_code_expired = datetime.now() + timedelta(
#             getattr(settings, 'VERIFICATION_CODE_EXPIRE_DAYS', 4)
#         )
#         # instance.save

#         # TODO: Currently, activate user when register
#         # Update: activate after verify email.
#         instance.is_active = True

# pre_save.connect(generate_verification_code, sender=UserAccount)

class UploadedDocument(models.Model):
    user_account = models.ForeignKey(UserAccount, on_delete=models.CASCADE, null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    filename = models.CharField(max_length=200)
    file_url = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    processed_status = models.CharField(max_length=50)
    deleted_at = models.DateTimeField(null=True, blank=True)

class Event(models.Model):
    document = models.ForeignKey(UploadedDocument, on_delete=models.SET_NULL, null=True, blank=True)
    # ANSWER_A_EVENT_DESCRIPTION
    description = models.TextField()
    # ANSWER_B_WHY_RELEVANT
    why_relevant = models.TextField()
    short_desc = models.TextField()
    language = models.ForeignKey(Language, on_delete=models.SET_NULL, null=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    published_at = models.DateTimeField(null=True, blank=True)
    file_version = models.CharField(max_length=200)

    def publish_to_es(self):
        # create and save and article
        event_doc = EventDoc(meta={'id': self.id}, title=self.description[0:50])
        event_doc.published_at = datetime.now()
        event_doc.save()

class EventKeyword(models.Model):    
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    keyword = models.ForeignKey(Keyword, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

class EventDetail(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete = models.CASCADE)
    # answer = models.ForeignKey(Choice, on_delete = models.CASCADE)
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

class DownloadedDocument(models.Model):
    user_account = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    downloaded_at = models.DateTimeField('date downloaded')
    deleted_at = models.DateTimeField(null=True, blank=True)

class KeywordHitsManager(models.Manager):
    def save_keyword_hit(self, kw):
        keyword = Keyword.objects.filter(content__iexact=kw).first()
        if keyword:
            kw_hits, _ = self.get_or_create(
                keyword = keyword,
                text = kw,
                is_new = False
            )
        else:
            kw_hits, _ = self.get_or_create(
                keyword = None,
                text = kw,
                is_new = True
            )
        print(kw_hits)
        kw_hits.hits_count += 1
        kw_hits.save()

        return kw_hits

    def sync_to_es(self):
        pass

    def get_popular_kws(self, limit=10):
        return self.all().order_by('-hits_count')[:limit]

class KeywordHits(models.Model):
    keyword = models.ForeignKey(Keyword, on_delete=models.SET_NULL, null=True)
    text = models.CharField(max_length=200)
    is_new = models.BooleanField(default=False)
    hits_count = models.IntegerField(default=0)

    objects = KeywordHitsManager()

    
