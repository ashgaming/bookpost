from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from api.serializer import MyTokenObtainPairSerializer , UserSerializersWithToken , StorySerializer , StoryListSerializer ,ChapterListSerializer , ChapterSerializer ,StoryListAdminSerializer ,ChapterListAdminSerializer , ContactUsSerializer
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth.models import User
from .models import Story , Chapter , Review , ContactUs
from datetime import datetime
from django.db.models import Q 
import os
from django.conf import settings
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from rest_framework_simplejwt.authentication import JWTAuthentication
from urllib.parse import quote , unquote
#redis cache
from django.core.cache import cache

#clodinary
import cloudinary.uploader

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
          #  first_name = data['name'],
            username=data['username'],
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
    auth_header = request.headers.get('Authorization')
    
    if not auth_header or not auth_header.startswith('Bearer '):
        return Response({'error': 'Authorization token missing or invalid'}, status=status.HTTP_401_UNAUTHORIZED)

    token = auth_header.split(' ')[1]  # Extract the token after 'Bearer '
    
    jwt_authenticator = JWTAuthentication()
    try:
        # Validate the token and get the corresponding user
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
    

@api_view(['GET'])
def listStory(request):
    if cache.get('storylist'):
        print('list cache')
        return Response(cache.get('storylist'))
    else:
        try:
            print('list DB')
            story = Story.objects.all()
            serializer = StoryListSerializer(story,many=True)
            cache.set('storylist',serializer.data,50)
            return Response(serializer.data)
        except:
            message = {'details':'User with this email already exists'}
            return Response(message,status=status.HTTP_400_BAD_REQUEST)

#done
@api_view(['GET'])
#@permission_classes([IsAuthenticated])
def storyDetails(request,storyid):
    data = request.data
    user = request.user
    if cache.get(f'story{storyid}'):
        # Check if story views are cached
        trackViews(storyid)
        # Return the cached story data
        return Response(cache.get(f'story{storyid}'))
    else:
        try:
            story = Story.objects.get(_id=storyid)
            # Increment the views count
            story.views += 1
            story.save()  # Save the updated story object

            serializer = StorySerializer(story,many=False)
            cache.set(f'story{storyid}',serializer.data,1000)
            
            trackViews(storyid)
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
    

@permission_classes([IsAdminUser])
@api_view(['POST'])
def createStory(request):
    data = request.data

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
@permission_classes([IsAdminUser])
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
            cover=data['cover'],
            createdAt=datetime.now()
        )
        serializer = ChapterSerializer(chap,many=False)
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    except:
        message = {'message':'Faild to create chapter'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])  # Using 'PUT' to update an existing chapter
@permission_classes([IsAdminUser])
def updateChapter(request, storyid, chapterid):
    data = request.data
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
@permission_classes([IsAuthenticated,IsAdminUser])
@api_view(['POST'])
def uploadImage(request):

    image = request.FILES.get('image')

    if not image:
        return Response({"error": "No image provided"}, status=400)

    # Sanitize the image name by replacing spaces with underscores
    image_name = image.name.replace(' ', '_')


#    # Define the image path relative to MEDIA_ROOT
#    image_path = os.path.join(settings.MEDIA_ROOT, image_name)  # 'backend/static/images/image_name'
#
#    # Save the image file in the 'static/images' folder
#    path = default_storage.save(image_path, ContentFile(image.read()))
#
#    # Construct the URL to access the image, which will be served from /images/
#    image_url = os.path.join(settings.MEDIA_URL, os.path.basename(path))  # '/images/image_name'
#
#    # Encode the URL for safe transmission
#    encoded_image_url = quote(image_url, safe=':/')


    try:
        # Upload the image to Cloudinary
        upload_result = cloudinary.uploader.upload(image, public_id=image_name)

        # Return the URL of the uploaded image
        return Response({"image_url": upload_result["secure_url"]}, status=201)

    except Exception as e:
        # Handle any exceptions that may occur during upload
        return Response({"error": str(e)}, status=500)
    


@api_view(['GET'])
@permission_classes([IsAdminUser])
def listAdminStory(request):
    try:
        story = Story.objects.all()
        serializer = StoryListAdminSerializer(story,many=True)
        return Response(serializer.data)
    except:
        message = {'details':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def listAdminChapter(request, storyid):
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
        return Response({'details': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['PUT'])  # Using 'PUT' to update an existing chapter
@permission_classes([IsAdminUser])
def updateStory(request, storyid):
    data = request.data
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


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteChapter(request, chapter_id):
    try:
        chapter = Chapter.objects.get(_id=chapter_id)
        chapter.delete()
        return Response({'message': 'Chapter deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
    except Chapter.DoesNotExist:
        return Response({'error': 'Chapter not found.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteStory(request, story_id):
    try:
        story = Story.objects.get(_id=story_id)
        story.delete()  # This will also delete related chapters due to the CASCADE behavior
        return Response({'message': 'Story and its chapters deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
    except Story.DoesNotExist:
        return Response({'error': 'Story not found.'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
@permission_classes([IsAdminUser])
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

@api_view(['GET'])
def mostpopular(request):
    if(cache.get('mostpop')):
        print('cache')
        return Response(cache.get('mostpop'), status=status.HTTP_200_OK)
    else:
        print('db')
        try:
            # Fetch the Story with the highest views using `order_by`
            story = Story.objects.order_by('-views').first()
            print('hit 1')
            if story:
                serializer = StorySerializer(story,many=False)

                cache.set('mostpop',serializer.data,5000)

                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({"message": "No stories found."}, status=status.HTTP_404_NOT_FOUND)
    
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def contactUs(request):
    data = request.data
    user = request.user

    form = ContactUs.objects.create(
        user=user,
        name=data['name'],
        email=data['email'],
        phone=data['phone'],
        message=data['message']
    )
         

    return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listContactUs(request):
    data = request.data
    user = request.user

    form = ContactUs.objects.all()
    serilizer = ContactUsSerializer(form,many=True)

    return Response(serilizer.data,status=status.HTTP_202_ACCEPTED)
#------------------------------------------------------------------------
CACHE_TIMEOUT = 60 * 15  # 15 minutes or adjust accordingly

def trackViews(storyid):
    cache_key_views = f'story{storyid}views'
    
    # Check if story views are cached
    if cache.get(cache_key_views):
        # Increment views count in cache
        current_views = cache.get(cache_key_views)
        cache.set(cache_key_views, current_views + 1, timeout=CACHE_TIMEOUT)
    else:
        # If views are not cached, initialize it to 1
        cache.set(cache_key_views, 2000, timeout=CACHE_TIMEOUT)

    # Retrieve the story from the database
    story = Story.objects.get(_id=storyid)
    
    # Before cache expires, update the views count in the database
    if cache.ttl(cache_key_views) < CACHE_TIMEOUT / 2:  # Check if cache is close to expiring
        story.views += cache.get(cache_key_views)  # Add cached views to the database
        story.save()

    