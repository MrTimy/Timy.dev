
from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('timy/', admin.sitee.urls),
    path('api/', include('core.urls'))
]
