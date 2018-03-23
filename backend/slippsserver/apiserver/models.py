# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Language(models.Model):
    code_2 = models.CharField(max_length=2, unique=True)
    code_3 = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

class Country(models.Model):
    code = models.CharField(max_length=2, unique=True)
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    question_pos = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_num = models.IntegerField()
    choice_text = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("question", "choice_num", "choice_text")
            

class Keyword(models.Model):
    language = models.CharField(max_length=2)
    category = models.CharField(max_length=2)
    kw_id = models.IntegerField()
    content = models.CharField(max_length=200)

class UserAccount(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField()
    hashed_pass = models.CharField(max_length=500)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    dob = models.DateTimeField("date of birth")
    gender = models.CharField(max_length=50)
    occupation = models.CharField(max_length=200)
    work_place = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)

class UploadedDocument(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    filename = models.CharField(max_length=200)
    file_url = models.CharField(max_length=200)
    description = models.TextField()

class Event(models.Model):
    document = models.ForeignKey(UploadedDocument, on_delete=models.SET_NULL, null=True)
    # ANSWER_A_EVENT_DESCRIPTION
    description = models.CharField(max_length=500)
    # ANSWER_B_WHY_RELEVANT
    why_relevant = models.CharField(max_length=500)
    short_desc = models.TextField()
    language = models.ForeignKey(Language, on_delete=models.SET_NULL, null=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class EventKeyword(models.Model):    
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    keyword = models.ForeignKey(Keyword, on_delete=models.CASCADE)

class EventDetail(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete = models.CASCADE)
    answer = models.ForeignKey(Choice, on_delete = models.CASCADE)

class DownloadedDocument(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    downloaded_at = models.DateTimeField('date downloaded')

