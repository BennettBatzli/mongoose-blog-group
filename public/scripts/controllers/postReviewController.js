myApp.controller('postReviewController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  $scope.dataFactory = DataFactory;


  $scope.posts = $scope.dataFactory.factoryGetPosts();

  console.log('scope post:: ', $scope.posts);

  if ($scope.dataFactory.postData() === undefined) {
    $scope.dataFactory.factoryGetPosts().then(function(){
      $scope.posts = $scope.dataFactory.postData();
    });
  } else {
    $scope.posts = $scope.dataFactory.postData();
  }

  $scope.fixDate = function() {
    $scope.selectedPost.date = new Date($scope.selectedPost.date);
  }
}]);
