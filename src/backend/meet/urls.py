from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from meet import views

urlpatterns = [

    # ex: /meetyourmajor/results/
    path('results/', views.ResultsList.as_view(), name='results'),
    # ex: /meetyourmajor/2/
    path('results/<int:pk>/', views.ResultDetail.as_view(), name='individual result'),

    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    
]

urlpatterns = format_suffix_patterns(urlpatterns)

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]