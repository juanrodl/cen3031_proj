from django.conf import settings
from django.db import models
from django.utils import timezone

class Result(models.Model):
    owner = models.ForeignKey('auth.User', related_name='results', on_delete=models.CASCADE)
    highlighted = models.TextField()

    date_time = models.DateTimeField(default=timezone.now)

    neuroticism = models.IntegerField(default=0)
    extraversion = models.IntegerField(default=0)
    openness = models.IntegerField(default=0)
    agreeableness = models.IntegerField(default=0)
    conscientiousness = models.IntegerField(default=0)
    

    def save(self, *args, **kwargs):
        """
        Use the `pygments` library to create a highlighted HTML
        representation of the result?
        """

        super().save(*args, **kwargs)

    class Meta:
        ordering = ['date_time']

