# api/serializers.py

import bcrypt

from rest_framework import serializers, validators
from django.db.models import Q
from datetime import datetime, timezone
from django.contrib.auth import get_user_model

from .models import (
    UserAccount,
    KeywordHits,
    Country,
    Language,
    Choice,
    Keyword,
    Event,
    EventDetail,
    Question
)

BCRYPT_SALT = b'$2b$12$hPhtNvTYULuTMEFZHC0m/e-ThisIsOurSalt'
User = get_user_model()

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('id', 'user_id', 'created_at', 'deleted_at', 'dob', 'gender', 'occupation', 'work_place', 'phone', 'verification_code', 'verification_code_expired')
        read_only_fields = (['id', 'user_id', 'created_at', 'deleted_at', 'verification_code', 'verification_code_expired'])

class UserRegistrationSerializer(serializers.Serializer):
    # is_deleted = serializers.SerializerMethodField()
    # is_verification_code_expired = serializers.SerializerMethodField()
    email = serializers.EmailField(required=False)

    password = serializers.CharField(
        style = {'input_type': 'password'},
        min_length = 8
    )

    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()

    user_account = UserAccountSerializer()
    # deleted_at = serializers.DateField(read_only=True, required=False)
    # verification_code = serializers.CharField(read_only=True, required=False)
    # verification_code_expired = serializers.DateField(read_only=True, required=False)
    # dob = serializers.CharField(allow_blank=True, required=False)
    # gender = serializers.CharField(allow_blank=True, required=False)
    # occupation = serializers.CharField()
    # work_place = serializers.CharField()
    # phone = serializers.CharField(allow_blank=True, required=False)

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Email already exists.")
        return value

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')
        read_only_fields = (['id'])
    #     fields = (
    #         'id',
    #         'username',
    #         'email',
    #         'first_name',
    #         'last_name',
    #         'deleted_at',
    #         'verification_code',
    #         'verification_code_expired'
    #         'created_at',
    #         'dob',
    #         'gender',
    #         'occupation',
    #         'work_place',
    #         'phone'
    #     )
    #     read_only_fields = (['id', 'created_at', 'is_active', 'deleted_at', 'verification_code', 'verification_code_expired'])

    def create(self, validated_data):
        validated_data["email"] = validated_data['username']

        user_account = UserAccount.objects.create_user(
            data=validated_data,
            is_active=True, #TODO: verify email
        )
        return user_account

    def update(self, instance, validated_data):
        account_data = validated_data.pop('account')
        user_account = instance.user_account

        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()

        user_account.dob = validated_data.get('dob', user_account.dob)
        user_account.gender = validated_data.get('gender', user_account.gender)
        user_account.occupation = validated_data.get('occupation', user_account.occupation)
        user_account.work_place = validated_data.get('work_place', user_account.work_place)
        user_account.phone = validated_data.get('phone', user_account.phone)
        user_account.save()

        return instance

# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(
#         write_only=True,
#         style={'input_type': 'password'}
#     )

#     class Meta(object):
#         model = User

#     def validate(self, data):
#         email = data.get('email', None)
#         password = data.get('password', None).encode('utf8')

#         if not email:
#             raise serializers.ValidationError("Please enter email to login.")

#         user = UserAccount.objects.filter(
#             Q(email=email)
#         ).exclude(
#             email__isnull=True
#         ).exclude(
#             email__iexact=''
#         ).exclude(
#             deleted_at__isnull=False
#         ).distinct()

#         if user.exists() and user.count() == 1:
#             user_obj = user.first()
#         else:
#             raise serializers.ValidationError("This email is not valid.")

#         if user_obj:
#             validate_pass = str(bcrypt.hashpw(password, BCRYPT_SALT)) == str(user_obj.hashed_pass)
#             if not validate_pass:
#                 raise serializers.ValidationError("Invalid credentials.")

#         if user_obj.is_active:
#             data['user'] = user_obj
#         else:
#             raise serializers.ValidationError("User not active.")

#         print(data)
#         return data

# class UserDetailsSerializer(serializers.Serializer):
#     """
#     User model w/o password
#     """
#     class Meta:
#         model = User
#         fields = ('id', 'email', 'first_name', 'last_name')
#         read_only_fields = ('email', )

class KeywordHitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeywordHits
        fields = '__all__'
        read_only_fields = ('id', 'text', 'hits_count', 'is_new', 'keyword_id')

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = '__all__'

class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = '__all__'

class EventDetailSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)
    choices = serializers.SerializerMethodField()

    class Meta:
        model = EventDetail
        fields = '__all__'

    def get_choices(self, obj):
        print(obj)
        queryset = Choice.objects.filter(choice_text = obj.answer)
        return ChoiceSerializer(queryset, many=True)

class EventSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    language = LanguageSerializer()
    country = CountrySerializer()
    event_details = EventDetailSerializer(many=True, read_only=True)
    keywords = KeywordSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = ('id', 'title', 'short_desc', 'created_at',
            'description', 'why_relevant', 'event_details', 'keywords', 'country', 'language')
        read_only_fields = (['id', 'created_at'])

    def get_title(self, obj):
        return obj.description[:50] + '...'

