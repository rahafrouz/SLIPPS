# Generated by Django 2.0.3 on 2018-04-13 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiserver', '0013_auto_20180413_0652'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='verification_code',
            field=models.CharField(default='123', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='useraccount',
            name='verification_code_expired',
            field=models.DateTimeField(null=True),
        ),
    ]
