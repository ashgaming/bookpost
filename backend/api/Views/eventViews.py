from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view , permission_classes
from django.contrib.auth.models import User

from ..models import Events , Announcements , Story
from api.serializer import EventSerializer , AnocementSerializer


from django.db.models import Q 

from django.core.files.base import ContentFile
from rest_framework_simplejwt.authentication import JWTAuthentication
from urllib.parse import quote , unquote
#redis cache
from django.core.cache import cache

#error handling
from django.db.utils import DatabaseError
from django.core.exceptions import ObjectDoesNotExist
from django.core.exceptions import ValidationError

@api_view(['GET'])
def listLatestEvent(request):
    try:
        # Check cache first
        cached_events = cache.get('latestEvent')
        if cached_events:
            return Response(cached_events, status=status.HTTP_200_OK)
        
        # Optimized query (use select_related/prefetch_related if applicable)
        events = Events.objects.all().order_by('-created_at')[:10]  # Use select_related() if foreign keys exist

        # Serialize the data
        serializer = EventSerializer(events, many=True)
        
        # Cache the result
        cache.set('latestEvent', serializer.data, timeout=500000)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    except DatabaseError as db_err:
        # Handle database errors
        print(f"Database error occurred: {db_err}")
        return Response({"error": "Database error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    except ObjectDoesNotExist as not_found_err:
        # Handle case where no events are found
        print(f"Object not found: {not_found_err}")
        return Response({"error": "No events found."}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        # Catch any other exceptions
        print(f"An error occurred: {e}")
        return Response({"error": "An unexpected error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def listUpcomingEvent(request):
    try:
        # Check cache first
        cached_events = cache.get('latestEvent')
        if cached_events:
            return Response(cached_events, status=status.HTTP_200_OK)
        
        # Optimized query (use select_related/prefetch_related if applicable)
        events = Events.objects.all().order_by('-created_at')[:10]  # Use select_related() if foreign keys exist

        # Serialize the data
        serializer = EventSerializer(events, many=True)
        
        # Cache the result
        cache.set('latestEvent', serializer.data, timeout=500000)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    except DatabaseError as db_err:
        # Handle database errors
        print(f"Database error occurred: {db_err}")
        return Response({"error": "Database error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    except ObjectDoesNotExist as not_found_err:
        # Handle case where no events are found
        print(f"Object not found: {not_found_err}")
        return Response({"error": "No events found."}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        # Catch any other exceptions
        print(f"An error occurred: {e}")
        return Response({"error": "An unexpected error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
     

@api_view(['GET'])
def listAnocement(request):
    try:
        # Check cache first
        cached_events = cache.get('latestAnoucement')
        if cached_events:
            return Response(cached_events, status=status.HTTP_200_OK)
        
        # Optimized query (use select_related/prefetch_related if applicable)
        events = Announcements.objects.all().order_by('-created_at')[:10]  # Use select_related() if foreign keys exist

        # Serialize the data
        serializer = EventSerializer(events, many=True)
        
        # Cache the result
        cache.set('latestAnoucement', serializer.data, timeout=500000)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    except DatabaseError as db_err:
        # Handle database errors
        print(f"Database error occurred: {db_err}")
        return Response({"error": "Database error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    except ObjectDoesNotExist as not_found_err:
        # Handle case where no events are found
        print(f"Object not found: {not_found_err}")
        return Response({"error": "No events found."}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        # Catch any other exceptions
        print(f"An error occurred: {e}")
        return Response({"error": "An unexpected error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['POST'])
def createAnocement(request):
    data = request.data
    user = request.user

    print(data)
    eventType = data['event']


    if(eventType=='NewChapter' | eventType =='AboutStory'):
        story = Story.objects.get(_id = data.get('story'))
#    chapter = Story.objects.get(_id = data.get('chapter'))

    event = Announcements.objects.create(
    user=user,
    chapter=data.get('chapter',None),
    story=data.get('story', None),       
    event=data.get('event', None),       
    message=data.get('message', None),       
    event_at=data.get('event_at', None), 
    expire_at=data.get('expire_at', None), 
    link=data.get('link', None),         
    has_done=data.get('has_done', False),  
    cover=data.get('cover', None),     
)


    serializer = AnocementSerializer(event,many=False)

    try:
        # Validate the input data
        if serializer.is_valid():
            event = serializer.save()  # Save the object if validation passes
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Return validation errors if any
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except ValidationError as ve:
        # Handle specific validation errors
        return Response({"error": str(ve)}, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        # Catch any other unexpected errors
        return Response({"error": "An error occurred during announcement creation."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    serializer = AnocementSerializer(event,many=False)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


