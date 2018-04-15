# api/serializers.py

import bcrypt

from rest_framework import serializers, validators
from django.db.models import Q
from datetime import datetime, timezone
from django.contrib.auth import get_user_model


from .models import UserAccount

BCRYPT_SALT = b'$2b$12$hPhtNvTYULuTMEFZHC0m/e-ThisIsOurSalt'
User = get_user_model()

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
    deleted_at = serializers.DateField(read_only=True, required=False)
    verification_code = serializers.CharField(read_only=True, required=False)
    verification_code_expired = serializers.DateField(read_only=True, required=False)
    dob = serializers.CharField(allow_blank=True, required=False)
    gender = serializers.CharField(allow_blank=True, required=False)
    occupation = serializers.CharField()
    work_place = serializers.CharField()
    phone = serializers.CharField(allow_blank=True, required=False)

    # def get_is_deleted(self, obj):
    #     return obj.deleted_at is None

    # def get_is_verification_code_expired(self, obj):
    #     return datetime.now(timezone.utc) > obj.verification_code_expired

    # def validate_email(self, value):
    #     if User.objects.filter(email=value).exists():
    #         raise serializers.ValidationError("Email already exists.")
    #     return value

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Email already exists.")
        return value

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        # model = User
        fields = (
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'deleted_at',
            'verification_code',
            'verification_code_expired'
            'created_at',
            'dob',
            'gender',
            'occupation', 
            'work_place',
            'phone'
        )
        # exclude = ('verification_code',)
        read_only_fields = (['id', 'created_at', 'is_active', 'deleted_at', 'verification_code', 'verification_code_expired'])
        # extra_kwargs = {'hashed_pass': {'write_only': True}}

    def create(self, validated_data):
        print("Entering create!!!")
        print(self)
        # raw_password = validated_data["hashed_pass"].encode('utf8')
        # hashed_pass = bcrypt.hashpw(raw_password, BCRYPT_SALT)
        validated_data["email"] = validated_data['username']

        user_account = UserAccount.objects.create_user(
            data=validated_data,
            is_active=True, #TODO: verify email
        )

        print(validated_data)

        # user = User.objects.create(
        #     email = validated_data['user.email'],
        #     username = validated_data['user.email'],
        #     first_name = validated_data['user.first_name'],
        #     last_name = validated_data['last_name'],
        #     password = validated_data['password']
        # )
                
        return user_account

    # def update(self, instance, validated_data):
    #     instance.first_name = validated_data.get('first_name', instance.first_name)
    #     instance.last_name = validated_data.get('last_name', instance.last_name)
    #     instance.dob = validated_data.get('dob', instance.dob)
    #     instance.gender = validated_data.get('gender', instance.gender)
    #     instance.occupation = validated_data.get('occupation', instance.occupation)
    #     instance.work_place = validated_data.get('work_place', instance.work_place)
    #     instance.phone = validated_data.get('phone', instance.phone)
    #     instance.save()
    #     return instance

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()

    # token = serializers.CharField(allow_blank=True, read_only=True)

    password = serializers.CharField(
        write_only=True,
        style={'input_type': 'password'}
    )

    class Meta(object):
        model = User

    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None).encode('utf8')

        if not email:
            raise serializers.ValidationError("Please enter email to login.")

        user = UserAccount.objects.filter(
            Q(email=email)
        ).exclude(
            email__isnull=True
        ).exclude(
            email__iexact=''
        ).exclude(
            deleted_at__isnull=False
        ).distinct()

        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise serializers.ValidationError("This email is not valid.")

        if user_obj:
            validate_pass = str(bcrypt.hashpw(password, BCRYPT_SALT)) == str(user_obj.hashed_pass)
            if not validate_pass:
                raise serializers.ValidationError("Invalid credentials.")

        if user_obj.is_active:
            data['user'] = user_obj
        else:
            raise serializers.ValidationError("User not active.")

        print(data)
        return data

class UserDetailsSerializer(serializers.Serializer):
    """
    User model w/o password
    """
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')
        read_only_fields = ('email', )
        