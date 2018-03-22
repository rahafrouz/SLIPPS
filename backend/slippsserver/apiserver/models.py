# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class UserAccount(models.Model):
	created_at = models.DateTimeField('date created')
	email = models.EmailField()
	first_name = models.CharField(max_length = 200)
	last_name = models.CharField(max_length = 200)


