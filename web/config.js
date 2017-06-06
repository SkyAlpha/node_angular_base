app.config(['$routeProvider', function($routeProvider){

  $routeProvider.when('/',{
    controller: 'MainController',
    templateUrl: 'views/Home.html'
  });
  $routeProvider.otherwise('/');


}]);
