from datetime import datetime
from pyexpat import model
from rest_framework import serializers
from ..models import Comments, Reply,User

class UserSerialize(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username']



class CommentsSerialize(serializers.ModelSerializer):
    username = UserSerialize()
    class Meta:
        model  = Comments
        fields = ('id','username','number','comment1')
