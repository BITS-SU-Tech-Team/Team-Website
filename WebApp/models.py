from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Timeline(models.Model):
    title = models.CharField(max_length=100)
    content = RichTextField()
    date = models.DateTimeField(blank=False, auto_now=False)

    def __str__(self):
        return self.title
