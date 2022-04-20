from attr import validate
from django.contrib.auth.models import User
from rest_framework import serializers
from meet.models import Result

class ResultSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Result
        fields = ['id', 'owner', 'date_time', 'neuroticism', 'extraversion', 'openness', 'agreeableness', 'conscientiousness',]

class UserSerializer(serializers.ModelSerializer):
    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Result.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'snippets']