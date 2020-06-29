from django.db import models


class Visit(models.Model):
    first_name = models.CharField(max_length=30 , default='')
    last_name = models.CharField(max_length=30 , default='')
    phone_number = models.CharField(max_length=11 , default='')
    description = models.TextField(default='')
    time = models.TimeField(auto_now=False, auto_now_add=False)
    date = models.DateField(auto_now=False, auto_now_add=False , null = True)

class WorkTimes(models.Model):
    startTime = models.TimeField(auto_now=False, auto_now_add=False)
    endTime = models.TimeField(auto_now=False, auto_now_add=False)
    date = models.DateField(auto_now=False, auto_now_add=False , null = True)
    reserved = models.BooleanField(default=False , editable=True)


