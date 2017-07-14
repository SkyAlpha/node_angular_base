(function(){
  'use strict';

  app.controller('MainController',['$scope', 'MainService', function($scope, MainService){

    $scope.people = [];

    $scope.getPeople = function(){
      MainService.getPeople().then(function(success){
        swal({type: 'success', text: "OK"});
        $scope.people = success.data;
      },function(err){
        swal('Error', "Could not find any results", 'error');
      });
    };

    $scope.getPeople();



  }]);

})();
