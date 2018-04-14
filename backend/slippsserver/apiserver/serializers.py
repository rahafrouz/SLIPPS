# api/serializers.py

from rest_framework import serializers, validators
import bcrypt

from .models import UserAccount
from datetime import datetime, timezone

BCRYPT_SALT = b'$2b$12$hPhtNvTYULuTMEFZHC0m/e-ThisIsOurSalt'

class UserSerializer(serializers.ModelSerializer):
    is_deleted = serializers.SerializerMethodField()
    is_verification_code_expired = serializers.SerializerMethodField()

    def get_is_deleted(self, obj):
        return obj.deleted_at is None

    def get_is_verification_code_expired(self, obj):
        print(self)
        print(obj.verification_code_expired)
        return datetime.now(timezone.utc) > obj.verification_code_expired

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = UserAccount
        fields = '__all__'
        read_only_fields = (['created_at', 'is_active', 'is_deleted', 'verification_code', 'is_verification_code_expired'])
        extra_kwargs = {'hashed_pass': {'write_only': True}}

    def create(self, validated_data):
        print("Entering create!!!")
        print(self)

        print(validated_data)
        # print(validated_data["password"])
        raw_password = validated_data["hashed_pass"].encode('utf8')
        hashed_pass = bcrypt.hashpw(raw_password, BCRYPT_SALT)
        validated_data["hashed_pass"] = hashed_pass
                
        return UserAccount.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.dob = validated_data.get('dob', instance.dob)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.occupation = validated_data.get('occupation', instance.occupation)
        instance.work_place = validated_data.get('work_place', instance.work_place)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        return instance
