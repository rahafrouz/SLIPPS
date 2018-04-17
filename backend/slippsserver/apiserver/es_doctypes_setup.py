from __future__ import unicode_literals

from doctypes import Event
from doctypes import Country
from doctypes import Language
from doctypes import Question
from doctypes import Choice
from doctypes import TaggedKeyword

print("==== COUNTRY =====")
Country.init()

print("==== LANGUAGE =====")
Language.init()

print("==== QUESTION =====")
Question.init()

print("==== CHOICE =====")
Choice.init()

print("==== KEYWORD =====")
TaggedKeyword.init()

print("==== EVENT =====")
Event.init()
