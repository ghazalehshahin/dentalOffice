from django.shortcuts import render
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import Visit,WorkTimes
from .serializers import WorkTimesSerializer,VisitSerializer, EmptyDateSerializer
import datetime
from django.utils import timezone
from rest_framework.parsers import JSONParser
from rest_framework import  status

class VisitViewSet(viewsets.ModelViewSet):
    queryset= Visit.objects.all()
    serializer_class =VisitSerializer
    ordering_fields='__all__'

class WorkTimesViewSet(viewsets.ModelViewSet):
    queryset= WorkTimes.objects.all()
    serializer_class =WorkTimesSerializer
    ordering_fields='__all__'

class ReservationView(APIView):
    def get(self , request , format=None):
        limit_date = datetime.date.today()+ datetime.timedelta(days=30)
        q1 = WorkTimes.objects.filter(date__gte=datetime.date.today())
        q2 = q1.filter(date__lte=limit_date)
        q3 = q2.exclude(reserved =True)
        available_times = q3[:20]
        serializer = WorkTimesSerializer(available_times , many=True)
        return Response(serializer.data)

class makeReservation(APIView):
    def post(self , request , format=None):
        serializer = VisitSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        selected_time = serializer.validated_data['time']
        selected_date = serializer.validated_data['date']
        q=WorkTimes.objects.get(startTime=selected_time , date = selected_date)
        q.reserved=True
        q.save()
        serializer.save()
        return Response(serializer.data , status=status.HTTP_201_CREATED)


class EmptyDates(APIView):
    def get(self , request , format=None):
        limit_date = datetime.date.today()+ datetime.timedelta(days=30)
        q1 = WorkTimes.objects.filter(date__gt=datetime.date.today())
        q2 = q1.filter(date__lte=limit_date)
        q3 = q2.exclude(reserved =True)
        q4 = q3.values('date').distinct()
        serializer = EmptyDateSerializer(q4 , many=True)
        return Response(serializer.data)

class hours(APIView):
    def get(self , request , format=None):
        selected_date = request.query_params.get('date', None)
        q1 = WorkTimes.objects.filter( date = selected_date)
        q2 = q1.exclude(reserved =True)
        serializer = WorkTimesSerializer(q2 , many=True)
        return Response(serializer.data)
