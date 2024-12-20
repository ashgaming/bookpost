from django.db import models
from django.contrib.auth.models import User

class Story(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200,null=True,blank=True)
    status = models.CharField(max_length=50,null=True,blank=True)
    category = models.CharField(max_length=200,null=True,blank=True)
    summary = models.TextField(null=True,blank=True)
    author = models.CharField(max_length=200,null=True,blank=True)
    totalChapter = models.IntegerField(null=True,blank=True,default=0)
    rating = models.DecimalField(max_digits=7, decimal_places=2,null=True)
    numReviews = models.IntegerField(null=True,blank=True,default=0)
    views = models.IntegerField(null=True,blank=True,default=0)
    likes =  models.IntegerField(null=True,blank=True,default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(max_length=250, null=True,blank=True,default='https://tse4.mm.bing.net/th?id=OIP.JKlsbvPessjEUEWMzvpiigAAAA&pid=Api&P=0&h=180')

     
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.name

class Chapter(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    story = models.ForeignKey(Story, on_delete=models.SET_NULL,null=True)
    title = models.TextField(max_length=200,null=True,blank=True)
    summary = models.TextField(max_length=1000,null=True,blank=True)
    chapter = models.TextField(max_length=5000,null=True,blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True, default=0.0)
    numReviews = models.IntegerField(null=True,blank=True,default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(max_length=300, null=True,blank=True,default='https://tse4.mm.bing.net/th?id=OIP.JKlsbvPessjEUEWMzvpiigAAAA&pid=Api&P=0&h=180')
    views = models.IntegerField(null=True,blank=True,default=0)
    likes =  models.IntegerField(null=True,blank=True,default=0)

    nextChapter = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='previous_chapter')
    previousChapter = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='next_chapter')

    _id = models.AutoField(primary_key=True,editable=False)

    def save(self, *args, **kwargs):
        # Call the original save() method first
        super().save(*args, **kwargs)

        # Update the next and previous chapters in the story sequence
        self.update_chapter_links()

    def update_chapter_links(self):
        # Get all chapters of the same story ordered by creation date
        chapters = Chapter.objects.filter(story=self.story).order_by('createdAt')

        for i, chapter in enumerate(chapters):
            # Set the nextChapter and previousChapter fields
            chapter.previousChapter = chapters[i - 1] if i > 0 else None
            chapter.nextChapter = chapters[i + 1] if i < len(chapters) - 1 else None
            chapter.save(update_fields=['previousChapter', 'nextChapter'])

    def __str__(self):
        return self.title

class Review(models.Model):
    types = models.CharField(max_length=20,null=True,blank=True,default='story')
    storyID = models.ForeignKey(Story, on_delete=models.SET_NULL,null=True)
    chapterID = models.ForeignKey(Chapter, on_delete=models.SET_NULL,null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    username = models.CharField(max_length=200,null=True,blank=True)
    comment = models.TextField(null=True,blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self._id)

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="ratings")
    story = models.ForeignKey(Story, on_delete=models.CASCADE, related_name="ratings")
    rating = models.PositiveIntegerField()  # e.g., 1 to 5
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'story')  # Prevent duplicate ratings per user per story

    def __str__(self):
        return f"Rating({self.rating}) by {self.user} on {self.story}"
       
class ContactUs(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=254, null=True, blank=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Field to store creation time

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name or "Unnamed Contact"


class Announcements(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.SET_NULL, null=True, blank=True)
    story = models.ForeignKey(Story, on_delete=models.SET_NULL, null=True, blank=True)
    event = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Field to store creation time
    event_at = models.DateTimeField(null=True, blank=True)  # Field to store event time
    expire_at = models.DateTimeField(null=True, blank=True)  # Field to store expiration time
    link = models.URLField(default='', max_length=200)
    has_done = models.BooleanField(default=False)
    cover = models.ImageField(max_length=300, null=True, blank=True, default='https://tse4.mm.bing.net/th?id=OIP.JKlsbvPessjEUEWMzvpiigAAAA&pid=Api&P=0&h=180')
    
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.event or "Unnamed Announcement"

class Events(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.SET_NULL, null=True, blank=True)
    story = models.ForeignKey(Story, on_delete=models.SET_NULL, null=True, blank=True)
    event = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Field to store creation time
    event_at = models.DateTimeField(null=True, blank=True)  # Field to store event time
    expire_at = models.DateTimeField(null=True, blank=True)  # Field to store expiration time
    link = models.URLField(default='', max_length=200)
    has_done = models.BooleanField(default=False)
    cover = models.ImageField(max_length=300, null=True, blank=True, default='https://tse4.mm.bing.net/th?id=OIP.JKlsbvPessjEUEWMzvpiigAAAA&pid=Api&P=0&h=180')
    
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.event or "Unnamed Announcement"