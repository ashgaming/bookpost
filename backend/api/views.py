from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from api.serializer import MyTokenObtainPairSerializer , UserSerializersWithToken , StorySerializer , StoryListSerializer ,ChapterListSerializer , ChapterSerializer
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth.models import User
from .models import Story , Chapter , Review
from datetime import datetime
from django.db.models import Q 
import os
from django.conf import settings
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
          #  first_name = data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password']),
            date_joined=datetime.now()
        )
        serializer = UserSerializersWithToken(user,many=False)
        return Response(serializer.data)
    except:
        message = {'details':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

#done
@api_view(['GET'])
def listStory(request):
    try:
        story = Story.objects.all()
        serializer = StoryListSerializer(story,many=True)
        return Response(serializer.data)
    except:
        message = {'details':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

#done
@api_view(['GET'])
def storyDetails(request,storyid):
    data = request.data
    try:
        story = Story.objects.get(_id=storyid)

        # Increment the views count
        story.views += 1
        story.save()  # Save the updated story object

        serializer = StorySerializer(story,many=False)
        return Response(serializer.data)
    except:
        message = {'details':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

#done
@api_view(['GET'])
def listChapter(request, storyid):
    try:
        # Fetch all chapters associated with the story ID
        chapters = Chapter.objects.filter(story=storyid)
        
        if chapters.exists():  # Check if chapters are found
            serializer = ChapterListSerializer(chapters, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            message = {'message': 'No chapters available for this story'}
            return Response(message, status=status.HTTP_204_NO_CONTENT)
    
    except Chapter.DoesNotExist:
        message = {'details': 'Story not found or invalid story ID'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        # General error handling
        return Response({'details': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def readChapter(request, storyid, chapterid):
    try:
        # Fetch the chapter based on story and chapter ID using Q object
        chapter = Chapter.objects.filter(Q(story=storyid) & Q(_id=chapterid)).first()

        if chapter:
            # Get total number of chapters for the given story
            total_chapters = Chapter.objects.filter(story=storyid).count()

            serializer = ChapterSerializer(chapter)  # No need for `many=True` since it's a single chapter
            return Response({ 'chapter' : serializer.data,'total_chapters': total_chapters}, status=status.HTTP_200_OK)
        else:
            message = {'message': 'Chapter not found'}
            return Response(message, status=status.HTTP_404_NOT_FOUND)

    except Chapter.DoesNotExist:
        message = {'details': 'Invalid chapter or story ID'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({'details': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
#done
@api_view(['POST'])
def createStory(request):
    data = request.data

    print(data)
    
    try:
        user = User.objects.get(id=1)
        story = Story.objects.create(
            user=user,
            name=data['title'],
            summary=data['description'],
            category = data['category'],
            cover = data['image'],
        )
        serializer = StorySerializer(story,many=False)
        return Response(serializer.data)
    except:
        message = {'details':'Story with this name already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def createChapter(request,storyid):
    data = request.data
    try:
        user = User.objects.get(id=1)
        story = Story.objects.get(_id=storyid)
        chap = Chapter.objects.create(
          #  first_name = data['name'],
            user = user,
            story = story,
            title=data['title'],
            summary=data['summary'],
            chapter=data['chapter'],
            cover=data['image'],
            createdAt=datetime.now()
        )
        serializer = ChapterSerializer(chap,many=False)
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    except:
        message = {'message':'Faild to create chapter'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    
#done
@api_view(['POST'])
def uploadImage(request):
    data=request.data
    image = request.FILES.get('image')
    print(data)

    if not image:
        return Response({"error": "No image provided"}, status=400)
    
    image_path = os.path.join('', image.name)
 #   image_path = os.path.join('static/images/', image.name)
    
    path = default_storage.save(image_path, ContentFile(image.read()))
    image_url = os.path.join(settings.MEDIA_URL, path)

    return Response({"image_url": image_url})