from attr import validate
from django.contrib.auth.models import User
from rest_framework import serializers
from meet.models import Result, LANGUAGE_CHOICES, STYLE_CHOICES

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

# class ResultsSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     date_time = serializers.DateTimeField()

#     neuroticism = serializers.IntegerField()
#     extraversion = serializers.IntegerField()
#     openness = serializers.IntegerField()
#     agreeableness = serializers.IntegerField()
#     conscientiousness = serializers.IntegerField()

#     def create(self, validated_data):
#         """
#         Create and return a new 'Results' instance, given the validated data.
#         """
#         return Result.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         """
#         Update and return an existing 'Results' instance, given the validated data.
#         """
#         instance.date_time = validated_data.get('date_time', instance.date_time)

#         instance.neuroticism = validated_data.get('neuroticism', instance.neuroticism)
#         instance.extraversion = validated_data.get('extraversion', instance.extraversion)
#         instance.openness = validated_data.get('openness', instance.openness)
#         instance.agreeableness = validated_data.get('agreeableness', instance.agreeableness)
#         instance.conscientiousness = validated_data.get('conscientiousness', instance.conscientiousness)

#         instance.save()
#         return instance
    

# class SnippetSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField(required=False, allow_blank=True, max_length=100)
#     code = serializers.CharField(style={'base_template': 'textarea.html'})
#     linenos = serializers.BooleanField(required=False)
#     language = serializers.ChoiceField(choices=LANGUAGE_CHOICES, default='python')
#     style = serializers.ChoiceField(choices=STYLE_CHOICES, default='friendly')

#     def create(self, validated_data):
#         """
#         Create and return a new `Snippet` instance, given the validated data.
#         """
#         return Snippet.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         """
#         Update and return an existing `Snippet` instance, given the validated data.
#         """
#         instance.title = validated_data.get('title', instance.title)
#         instance.code = validated_data.get('code', instance.code)
#         instance.linenos = validated_data.get('linenos', instance.linenos)
#         instance.language = validated_data.get('language', instance.language)
#         instance.style = validated_data.get('style', instance.style)
#         instance.save()
#         return instance