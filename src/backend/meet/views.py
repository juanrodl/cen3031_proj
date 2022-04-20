from rest_framework import status
from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.http import Http404
from django.contrib.auth.models import User

from meet.serializers import UserSerializer
from meet.models import Result
from meet.serializers import ResultSerializer


class ResultsList(generics.ListCreateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ResultDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# @csrf_exempt
# def results_list(request):
#     """
#     List all results, or create a new result.
#     """
#     # Received request to get results object
#     if request.method == 'GET':
#         results = Result.objects.all()
#         serializer = ResultSerializer(results, many=True)
#         return JsonResponse(serializer.data, safe=False)


#     # Received results object
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = ResultSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)

# @csrf_exempt
# def result_detail(request, pk):
#     """
#     Retrieve, update or delete a result.
#     """
#     try:
#         result = Result.objects.get(pk=pk)
#     except Result.DoesNotExist:
#         return HttpResponse(status=404)

#     if request.method == 'GET':
#         serializer = ResultSerializer(result)
#         return JsonResponse(serializer.data)

#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = ResultSerializer(result, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)

#     elif request.method == 'DELETE':
#         result.delete()
#         return HttpResponse(status=204)