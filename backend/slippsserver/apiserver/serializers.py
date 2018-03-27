# api/serializers.py

from rest_framework import serializers
from .models import Country

class CountrySerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    def create(self, validated_data):
        return Country(id=None, **validated_data)

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Country
        fields = ('id', 'name', 'code', 'created_at')
        read_only_fields = (['created_at'])
