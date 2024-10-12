from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from api.serializer import MyTokenObtainPairSerializer , UserSerializersWithToken , StorySerializer , StoryListSerializer ,ChapterListSerializer , ChapterSerializer ,StoryListAdminSerializer ,ChapterListAdminSerializer
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
from rest_framework_simplejwt.authentication import JWTAuthentication
from urllib.parse import quote , unquote

from django.core.cache import cache

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

@api_view(['GET'])
def userDetails(request,token):
    jwt_authenticator = JWTAuthentication()
    try:
        # Extract the token and get the validated user
        validated_token = jwt_authenticator.get_validated_token(token)
        user = jwt_authenticator.get_user(validated_token)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_401_UNAUTHORIZED)

    # Return the user details from the database
    user_details = {
        '_id': user.id,  # The user's ID in the database
        'username': user.username,
        'isAdmin': user.is_staff,  # If the user is staff (admin)
    }
    
    return Response(user_details, status=status.HTTP_200_OK)
    

#done
@api_view(['GET'])
def listStory(request):
    try:
        story = Story.objects.all()
        serializer = StoryListSerializer(story,many=True)
        print(serializer.data)
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
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    except:
        message = {'details':'Story with this name already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def createChapter(request,storyid):
    data = request.data
    print(data)
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
            cover=data['cover'],
            createdAt=datetime.now()
        )
        serializer = ChapterSerializer(chap,many=False)
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    except:
        message = {'message':'Faild to create chapter'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])  # Using 'PUT' to update an existing chapter
def updateChapter(request, storyid, chapterid):
    data = request.data
    print(data)
    try:
        # Fetch the user (you might want to replace this with the authenticated user)
        user = User.objects.get(id=1)  # Ideally replace this with authenticated user

        # Fetch the specific story by storyid
        story = Story.objects.get(_id=storyid)

        # Fetch the chapter to update by chapterid
        chap = Chapter.objects.get(_id=chapterid, story=story)

        # Update chapter fields
        if data.get('title') is not None:
            chap.title = data['title']  # Update title if provided
        if data.get('summary') is not None:
            chap.summary = data['summary']  # Update summary if provided
        if data.get('chapter') is not None:
            chap.chapter = data['chapter']  # Update chapter if provided

        # Only update cover if a new value is provided
        if 'cover' in data and data['cover'] != '':
            chap.cover = data['cover']  # Update cover if provided

        chap.updatedAt = datetime.now()  # Add a field to track update time (optional)

        # Save the updated chapter
        chap.save()

        # Serialize the updated chapter data and return response
        serializer = ChapterSerializer(chap, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Chapter.DoesNotExist:
        message = {'message': 'Chapter not found'}
        return Response(message, status=status.HTTP_404_NOT_FOUND)

    except Story.DoesNotExist:
        message = {'message': 'Story not found'}
        return Response(message, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        message = {'message': f'Failed to update chapter: {str(e)}'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

#done
@api_view(['POST'])
def uploadImage(request):
    data = request.data
    image = request.FILES.get('image')

    if not image:
        return Response({"error": "No image provided"}, status=400)

    # Sanitize the image name by replacing spaces and other characters
    image_name = image.name.replace(' ', '_')  # Replacing spaces with underscores
    image_path = os.path.join('images/', image_name)  # Adjust directory as needed
    
    # Save the image file
    path = default_storage.save(image_path, ContentFile(image.read()))
    
    # Construct the URL and encode it properly
    image_url = os.path.join(settings.MEDIA_URL, path)
    encoded_image_url = quote(image_url, safe=':/')  # Encode the URL
    
    return Response({"image_url": encoded_image_url})


@api_view(['GET'])
def listAdminStory(request):
    try:
        story = Story.objects.all()
        serializer = StoryListAdminSerializer(story,many=True)
        return Response(serializer.data)
    except:
        message = {'details':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def listAdminChapter(request, storyid):
    print(storyid)
    try:
        # Try to get serialized chapters from cache
        if storyid==100: # cache.get('listAdminChapter'):
            chapters = cache.get('listAdminChapter')
            print('db: ', 'cache')
        else:
            # Fetch all chapters associated with the story ID
            chapters = Chapter.objects.filter(story=storyid)
            
            if chapters.exists():  # Check if chapters are found
                # Serialize the chapters and cache the serialized data
                chapters = ChapterListAdminSerializer(chapters, many=True).data
               # cache.set('listAdminChapter', chapters, timeout=25)
                print('db: ', 'pg')
            else:
                message = {'message': 'No chapters available for this story'}
                return Response(message, status=status.HTTP_204_NO_CONTENT)
        
        # Return the cached or newly fetched serialized chapters
        return Response(chapters, status=status.HTTP_200_OK)
    
    except Chapter.DoesNotExist:
        message = {'details': 'Story not found or invalid story ID'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        # General error handling
        print(e)
        return Response({'details': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['PUT'])  # Using 'PUT' to update an existing chapter
def updateStory(request, storyid, chapterid):
    data = request.data
    print(data)
    try:
        # Fetch the user (you might want to replace this with the authenticated user)
        user = User.objects.get(id=1)  # Ideally replace this with authenticated user

        # Fetch the specific story by storyid
        story = Story.objects.get(_id=storyid)

        # Update chapter fields
        if data.get('title') is not None:
            story.name = data['title']  # Update title if provided
        if data.get('summary') is not None:
            story.summary = data['summary']  # Update summary if provided
        if data.get('category') is not None:
            story.category = data['category']  # Update chapter if provided

        # Only update cover if a new value is provided
        if 'cover' in data and data['cover'] != '':
            story.cover = data['cover']  # Update cover if provided

        story.updatedAt = datetime.now()  # Add a field to track update time (optional)

        # Save the updated chapter
        story.save()

        # Serialize the updated chapter data and return response
        serializer = StorySerializer(story, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    
    except Story.DoesNotExist:
        message = {'message': 'Story not found'}
        return Response(message, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        message = {'message': f'Failed to update story: {str(e)}'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def deleteImage(request):
    image_url = request.data.get('image_url')

    if not image_url:
        return Response({"error": "No image URL provided"}, status=400)

    # Decode the URL back to the file path
    decoded_image_url = unquote(image_url)

    # Extract the file path from the MEDIA_URL (i.e., strip the MEDIA_URL part)
    image_path = decoded_image_url.replace(settings.MEDIA_URL, '')

    # Get the full path of the image on the server
    full_image_path = os.path.join(settings.MEDIA_ROOT, image_path)

    # Check if the file exists and delete it
    if default_storage.exists(full_image_path):
        default_storage.delete(full_image_path)
        return Response({"message": "Image deleted successfully"})
    else:
        return Response({"error": "Image not found"}, status=404)