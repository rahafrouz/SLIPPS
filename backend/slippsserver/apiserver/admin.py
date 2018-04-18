# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from datetime import datetime
from django.contrib.admin import AdminSite
from django.contrib.auth import get_user_model


# import nested_admin

from .models import (
	UserAccount,
	Country,
	Language,
	Keyword,
	Question,
	Choice,
	Event,
	EventKeyword,
	EventDetail,
	KeywordHits,
	UploadedDocument,
	DownloadedDocument,
)

User = get_user_model()

# ADMIN ACTIONS
def archive_selected(modeladmin, request, queryset):
    queryset.update(deleted_at = datetime.now())
archive_selected.short_description = "Archive selected items"

admin.site.disable_action('delete_selected')
admin.site.add_action(archive_selected)

class SlippsAdmin(AdminSite):
	site_header = 'SLIPPS Learning Center Administration'
	site_title = 'SLIPPS Learning Center Administration'

admin.site = SlippsAdmin(name='slippsadmin')


# @admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
	list_display = ('code', 'name', 'deleted_at')
	ordering = ['code', 'deleted_at']
# admin_site.register(CountryAdmin)


# @admin.register(Language)
class LanguageAdmin(admin.ModelAdmin):
	list_display = ('id', 'code_2', 'name')

	pass

# @admin.register(Keyword)
class KeywordAdmin(admin.ModelAdmin):
	list_display = ('id', 'language_code', 'kw_id', 'category', 'content')

	pass

# @admin.register(Choice)
class ChoiceAdmin(admin.StackedInline):
	model = Choice
	pass

# @admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
	list_display = ('id', 'question_text', 'question_pos')
	ordering = ['id']

	# model = Question
	inlines = [ChoiceAdmin]

	pass


# @admin.register(UploadedDocument)
class UploadedDocumentAdmin(admin.StackedInline):
	model = UploadedDocument
	pass


# @admin.register(UserAccount)
class UserAccountAdmin(admin.ModelAdmin):
	list_display = ('id', 'user_id')
	inlines=[UploadedDocumentAdmin]
	pass

# @admin.register(DownloadedDocument)
class DownloadedDocumentAdmin(admin.ModelAdmin):
	pass

# @admin.register(EventDetail)
class EventDetailAdmin(admin.StackedInline):
	model = EventDetail
	# list_select_related = True

# @admin.register(EventKeyword)
class EventKeywordAdmin(admin.StackedInline):
	model = EventKeyword

# @admin.register(Event)
class EventAdmin(admin.ModelAdmin):
	# date_hierarchy = 'created_at'
	# list_select_related = ('document', 'language', 'country')
	list_display = ('id', 'short_desc', 'file_version', 'created_at')
	ordering = ['id']
	inlines = [EventDetailAdmin, EventKeywordAdmin]

# @admin.register(KeywordHits)
class KeywordHitsAdmin(admin.ModelAdmin):
	ordering = ['-hits_count']

class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name')
    list_filter = ('is_staff', 'is_superuser')


# admin.site.unregister(User)
admin.site.register(User, UserAdmin)

admin.site.register(Country, CountryAdmin)
admin.site.register(Language, LanguageAdmin)
admin.site.register(Keyword, KeywordAdmin)
admin.site.register(Question, QuestionAdmin)
# admin.site.register(Choice, ChoiceAdmin)
admin.site.register(UserAccount, UserAccountAdmin)
# admin.site.register(DownloadedDocument, UploadedDocumentAdmin)
# admin.site.register(UploadedDocument, UploadedDocumentAdmin)
admin.site.register(Event, EventAdmin)
# admin.site.register(EventDetail, EventDetailAdmin)
# admin.site.register(EventKeyword, EventKeywordAdmin)
admin.site.register(KeywordHits, KeywordHitsAdmin)
