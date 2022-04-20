from django.conf import settings
from django.db import models
from django.utils import timezone

from pygments import highlight
from pygments.lexers import get_lexer_by_name
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from pygments.formatters.html import HtmlFormatter

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])


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
        representation of the code snippet.
        """
        
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['date_time']


# class Snippet(models.Model):
#     created = models.DateTimeField(auto_now_add=True)
#     title = models.CharField(max_length=100, blank=True, default='')
#     code = models.TextField()
#     linenos = models.BooleanField(default=False)
#     language = models.CharField(choices=LANGUAGE_CHOICES, default='python', max_length=100)
#     style = models.CharField(choices=STYLE_CHOICES, default='friendly', max_length=100)

#     class Meta:
#         ordering = ['created']