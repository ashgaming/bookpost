from django.db.models.signals import pre_save , post_save , post_delete
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Chapter ,Rating
from django.db.models import Avg , Count

def updateUser(sender,instance,**kwargs):
    user = instance
    if user.email != '':
        user.username = user.username

#pre_save.connect(updateUser,sender=User)


# Connect signal to update chapter links on creation
@receiver(post_save, sender=Chapter)
def update_chapter_relations(sender, instance, **kwargs):
    instance.update_chapter_links()


@receiver([post_save, post_delete], sender=Rating)
def update_chapter_rating(sender, instance, **kwargs):
    # Get the chapter associated with the rating
    chapter = instance.story  # Assuming each rating is linked to a story (or chapter)

    # Calculate the average rating and count of ratings for the story
    avg_rating = Rating.objects.filter(story=chapter).aggregate(
        average_rating=Avg('rating'),  # Calculate the average rating
        count=Count('rating')          # Count the number of ratings
    )

    # Extract the average rating and count, using 0 if None
    average_rating = avg_rating['average_rating'] or 0
    count = avg_rating['count'] or 0

    # Update the chapter's rating and the number of reviews
    chapter.rating = average_rating
    chapter.numReviews = count  # Assuming numReviews is the field for the number of reviews
    chapter.save()