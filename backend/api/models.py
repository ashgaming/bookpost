from django.db import models
from django.contrib.auth.models import User

class Story(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200,null=True,blank=True)
    category = models.CharField(max_length=200,null=True,blank=True)
    summary = models.TextField(null=True,blank=True)
    author = models.CharField(max_length=200,null=True,blank=True)
    totalChapter = models.IntegerField(null=True,blank=True,default=0)
    rating = models.DecimalField(max_digits=7, decimal_places=2,null=True)
    numReviews = models.IntegerField(null=True,blank=True,default=0)
    views = models.IntegerField(null=True,blank=True,default=0)
    likes =  models.IntegerField(null=True,blank=True,default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(max_length=300, null=True,blank=True,default='https://tse4.mm.bing.net/th?id=OIP.JKlsbvPessjEUEWMzvpiigAAAA&pid=Api&P=0&h=180')

     
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.name

class Chapter(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    story = models.ForeignKey(Story, on_delete=models.SET_NULL,null=True)
    title = models.TextField(max_length=200,null=True,blank=True)
    summary = models.TextField(max_length=1000,null=True,blank=True)
    chapter = models.TextField(max_length=5000,null=True,blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2,null=True)
    numReviews = models.IntegerField(null=True,blank=True,default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(max_length=300, null=True,blank=True,default='https://tse4.mm.bing.net/th?id=OIP.JKlsbvPessjEUEWMzvpiigAAAA&pid=Api&P=0&h=180')
    views = models.IntegerField(null=True,blank=True,default=0)
    likes =  models.IntegerField(null=True,blank=True,default=0)

     
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.title

class Review(models.Model):
    storyID = models.ForeignKey(Story, on_delete=models.SET_NULL,null=True)
    chapterID = models.ForeignKey(Chapter, on_delete=models.SET_NULL,null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    username = models.CharField(max_length=200,null=True,blank=True)    
    rating = models.IntegerField(null=True,blank=True,default=0)
    comment = models.TextField(null=True,blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.rating)
    
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
