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

class SearchSerializer(serializers.Serializer):
	description = serializers.CharField(max_length=500)
	short_desc = serializers.CharField()
	language = serializers.CharField(max_length=200)
	country = serializers.CharField(max_length=200)
	created_at = serializers.DateTimeField()
