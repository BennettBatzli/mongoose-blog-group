var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/postCreation', {
      templateUrl: '/views/templates/postCreation.html',
      controller: 'postCreationController'
    })
    .when('/postReview', {
      templateUrl: '/views/templates/tyrion.html',
      controller: 'postReviewController'
    })
    .otherwise({
      redirectTo: 'postCreation'
    });

}]);


console.log('MONGO');