from django.shortcuts import render
from .models import Timeline

# Create your views here.
def index(request):
    return render(request, 'index.html')

def timeline(request):
    timeline = Timeline.objects.order_by('-date')
    return render(request, 'team.html', {'timeline': timeline})
