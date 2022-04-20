from rest_framework import status
from rest_framework import mixins
from rest_framework import generics

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.http import Http404

from meet.models import Result
from meet.serializers import ResultSerializer


class ResultsList(APIView):
    """
    List all results, or create a new result.
    """
    def get(self, request, format=None):
        results = Result.objects.all()
        serializer = ResultSerializer(results, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ResultSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResultDetail(APIView):
    """
    Retrieve, update or delete a result instance.
    """
    def get_object(self, pk):
        try:
            return Result.objects.get(pk=pk)
        except Result.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        result = self.get_object(pk)
        serializer = ResultSerializer(result)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        result = self.get_object(pk)
        serializer = ResultSerializer(result, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        result = self.get_object(pk)
        result.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


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