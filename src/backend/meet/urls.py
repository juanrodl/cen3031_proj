from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from meet import views

urlpatterns = [
    # ex: /meetyourmajor/
    # path('', views.index, name='index'),

    # ex: /meetyourmajor/assessment/
    # path('assessment/', views.assessment, name='assessment'),
    # ex: /meetyourmajor/profile/
    # path('profile/', views.profile, name='profile'),

    # ex: /meetyourmajor/results/
    path('results/', views.results_list, name='results'),
    # ex: /meetyourmajor/2/
    path('results/<int:pk>/', views.result_detail, name='individual result')
    
]

urlpatterns = format_suffix_patterns(urlpatterns)