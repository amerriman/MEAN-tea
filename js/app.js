var app = angular.module('teaApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'teaController'
      })
      .otherwise( {
        redirectTo: '/'
      });

 // $locationProvider.html5Mode(true);

}]);



