# Generated by Django 2.0.3 on 2018-04-18 08:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apiserver', '0023_auto_20180417_0954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choice',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='country',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='downloadeddocument',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='eventdetail',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='eventkeyword',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='language',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='uploadeddocument',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='uploadeddocument',
            name='user_account',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='apiserver.UserAccount'),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='verification_code',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='verification_code_expired',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
