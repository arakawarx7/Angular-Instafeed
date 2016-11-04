angular.module('myApp')
.factory('instagramAPI',['$http', function($http){
  function fetch() {
    return $http.jsonp("https://api.instagram.com/v1/users/175690487/media/recent/?count=99&&callback=JSON_CALLBACK&access_token=175690487.ac56a45.77c75719e53344f5a49617c9bbee53ad");
  }

  return {
    fetchInstagramFeed : fetch
  };

}])

