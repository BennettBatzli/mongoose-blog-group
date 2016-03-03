myApp.controller('postCreationController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  $scope.dataFactory = DataFactory;

  $scope.submitPost = function() {
    $scope.postObject = {
      title: $scope.title,
      author: $scope.author,
      date: $scope.date,
      blogText: $scope.blogText
    };

    console.log('post obcjet', $scope.postObject);
    $scope.dataFactory.factorySubmitPost($scope.postObject);

    $scope.title = '';
    $scope.author = '';
    $scope.date= null;
    $scope.blogText = '';

  };


}]);