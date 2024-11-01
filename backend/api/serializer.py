from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from datetime import datetime
from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import *
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import exception_handler
from rest_framework.exceptions import AuthenticationFailed, NotAuthenticated
from rest_framework.response import Response
from rest_framework import status
 

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        try:
            # Perform the standard validation
            data = super().validate(attrs)

            # Add additional user information to the response data
            serializer = UserSerializersWithToken(self.user).data
            data.update(serializer)

            # Update the user login details
            self.user.is_active = True
            self.user.last_login = datetime.now()
            self.user.save()

            return data

        except AuthenticationFailed:
            # Raise AuthenticationFailed with a custom message for invalid credentials
            raise AuthenticationFailed(
                detail="Unauthorized access. Please check your credentials.",
                code='authorization'
            )
        except Exception as e:
            # Raise AuthenticationFailed with a generic message for other errors
            raise AuthenticationFailed(
                detail="Authentication failed due to an unexpected error.",
                code='authorization'
            )
    



def custom_exception_handler(exc, context):
    # Call the default exception handler first
    response = exception_handler(exc, context)
    
    # Check if the exception is related to authentication errors
    if isinstance(exc, (AuthenticationFailed, NotAuthenticated)):
        custom_response_data = {
            "error": "Authorization failed",
            "message": "You do not have permission to access this resource. Please log in and try again.",
        }
        return Response(custom_response_data, status=status.HTTP_401_UNAUTHORIZED)
    
    # Return the default response for other errors
    return response    

    
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    last_login = serializers.SerializerMethodField(read_only=True)
    isActive = serializers.SerializerMethodField(read_only=True)
    date_joined = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin','last_login','isActive','date_joined']

    def get_name(self,obj):
        name=obj.first_name
        if name == '':
            name=obj.email
        return name
    
    def get__id(self,obj):
        return obj.id
    
    def get_isAdmin(self,obj):
        return obj.is_staff
    
    def get_last_login(self,obj):
        return obj.last_login
    
    def get_date_joined(self,obj):
        return obj.date_joined
    
    def get_isActive(self,obj):
        return obj.is_active


class UserSerializersWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
class StoryListSerializer(serializers.ModelSerializer):
     class Meta:
        model = Story
        fields = ['_id','name','cover','summary']
    
     def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Ensure the 'url' is handled as a plain string without encoding
        representation['cover'] = str(instance.cover)
        return representation

class StorySerializer(serializers.ModelSerializer):
     class Meta:
        model = Story
        fields = '__all__'

     def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Ensure the 'url' is handled as a plain string without encoding
        representation['cover'] = str(instance.cover)
        return representation

class ChapterListSerializer(serializers.ModelSerializer):
     class Meta:
        model = Chapter
        fields = ['_id','title','cover']

     def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Ensure the 'url' is handled as a plain string without encoding
        representation['cover'] = str(instance.cover)
        return representation
     
class ChapterSerializer(serializers.ModelSerializer):
     class Meta:
        model = Chapter
        fields = '__all__'

     def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Ensure the 'url' is handled as a plain string without encoding
        representation['cover'] = str(instance.cover)
        return representation
     
class StoryListAdminSerializer(serializers.ModelSerializer):
     class Meta:
        model = Story
        fields = ['_id','name','category','createdAt']

     def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Ensure the 'url' is handled as a plain string without encoding
        representation['cover'] = str(instance.cover)
        return representation
     
class ChapterListAdminSerializer(serializers.ModelSerializer):
     class Meta:
        model = Chapter
        fields = ['_id','title','createdAt','views','likes']

     def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Ensure the 'url' is handled as a plain string without encoding
        representation['cover'] = str(instance.cover)
        return representation
     
class ContactUsSerializer(serializers.ModelSerializer):
     class Meta:
        model = ContactUs
        fields = '__all__'

class AnocementSerializer(serializers.ModelSerializer):
     class Meta:
        model = Announcements
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
     class Meta:
        model = Events
        fields = '__all__'

