# Generated by Django 2.0.3 on 2018-04-18 08:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apiserver', '0024_auto_20180418_0805'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='document',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiserver.UploadedDocument'),
        ),
        migrations.AlterField(
            model_name='event',
            name='published_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='uploadeddocument',
            name='user_account',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='apiserver.UserAccount'),
        ),
    ]
