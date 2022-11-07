from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from home.models import Comments, Reply
from home.api.serializer import CommentsSerialize


class ListClass(APIView):
    def get(self, request, *args, **kwargs):
        all = Comments.objects.all()
        serial = CommentsSerialize(all,many=True, context = {'request':request})
        return Response(serial.data)
