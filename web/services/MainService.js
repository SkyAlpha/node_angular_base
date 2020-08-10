(function () {
  'use strict';

  app.factory('MainService', [
    '$http',
    function ($http) {
      var response = {};

      //route that returns a list of random people.
      response.getPeople = function () {
        return $http.get('http://localhost:8090/rest/people');
      };
      //route that returns a list of random people.
      response.getC = function () {
        return $http.get('http://localhost:8090/rest/people');
      };
      response.getP = function () {
        return $http.get('http://localhost:8090/rest/people');
      };

      return response;
    },
  ]);
})();
