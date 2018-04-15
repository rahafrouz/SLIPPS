# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from datetime import datetime

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

# ADMIN ACTIONS
def archive_selected(modeladmin, request, queryset):
    queryset.update(deleted_at = datetime.now())
archive_selected.short_description = "Archive selected items"

admin.site.disable_action('delete_selected')
admin.site.add_action(archive_selected)

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
	list_display = ('code', 'name', 'deleted_at')
	ordering = ['code', 'deleted_at']

@admin.register(Language)
class LanguageAdmin(admin.ModelAdmin):
	pass

@admin.register(Keyword)
class KeywordAdmin(admin.ModelAdmin):
	pass

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
	pass

@admin.register(Choice)
class ChoiceAdmin(admin.ModelAdmin):
	pass

@admin.register(UserAccount)
class UserAccountAdmin(admin.ModelAdmin):
	pass

@admin.register(DownloadedDocument)
class DownloadedDocumentAdmin(admin.ModelAdmin):
	pass

@admin.register(UploadedDocument)
class UploadedDocumentAdmin(admin.ModelAdmin):
	pass

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
	date_hierarchy = 'created_at'
	list_select_related = ('document', 'language', 'country')

@admin.register(EventDetail)
class EventDetailAdmin(admin.ModelAdmin):
	list_select_related = True

@admin.register(EventKeyword)
class EventKeywordAdmin(admin.ModelAdmin):
	pass

@admin.register(KeywordHits)
class KeywordHitAdmin(admin.ModelAdmin):
	ordering = ['-hits_count']


# admin.site.register(Country, CountryAdmin)
# admin.site.register(Language, LanguageAdmin)
# admin.site.register(Keyword, KeywordAdmin)
# admin.site.register(Question, QuestionAdmin)
# admin.site.register(Choice, ChoiceAdmin)
# admin.site.register(UserAccount, UserAccountAdmin)
# admin.site.register(DownloadedDocument, UploadedDocumentAdmin)
# admin.site.register(UploadedDocument, UploadedDocumentAdmin)
# admin.site.register(Event, EventAdmin)
# admin.site.register(EventDetail, EventDetailAdmin)
# admin.site.register(EventKeyword, EventKeywordAdmin)
# admin.site.register(KeywordHits, KeywordHitsAdmin)
