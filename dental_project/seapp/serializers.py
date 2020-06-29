from rest_framework import serializers
from .models import WorkTimes,Visit


class WorkTimesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkTimes
        fields='__all__'

class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields='__all__'

class EmptyDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkTimes
        fields = ('id','date')