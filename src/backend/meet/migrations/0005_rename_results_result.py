# Generated by Django 4.0.3 on 2022-04-18 17:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meet', '0004_alter_results_date_time'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Results',
            new_name='Result',
        ),
    ]