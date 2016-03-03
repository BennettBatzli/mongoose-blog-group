myApp.factory('DataFactory', ['$http', function($http) {


  //private
  var posts = undefined;

  var privateSubmitPost = function(post) {
    console.log('submitting post!!', post);
    var promise = $http.post('/data', post).then(function(response){
      console.log('here eez ze post rezponze:::::', response);
    });

    return promise;
  };

  var privateGetPosts = function(){
    console.log('GETTIN\' POSTS! ');
    var promise = $http.get('/data').then(function(response){
      posts = response.data;
      console.log('the data response:: ', response);
    });

    return promise;
  };


  //public

  var publicApi = {
    factorySubmitPost: function(post) {
      return privateSubmitPost(post);
    },
    factoryGetPosts: function() {
      return privateGetPosts();
    },
    postData: function() {
      return posts;
    }

  };

  return publicApi;

}]);