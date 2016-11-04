angular.module('myApp') // attach a controller to the module
.controller( 'myController', [
  '$scope',
   'instagramAPI',
  ($scope, instagramAPI) => {
  instagramAPI.fetchInstagramFeed().success((pictures) => {
    $scope.pictures = pictures;
    $scope.layout = "list";
    $scope.setLayout = (layout)=>{
      $scope.layout= layout;
    }
    console.log(pictures);
  });
}]);