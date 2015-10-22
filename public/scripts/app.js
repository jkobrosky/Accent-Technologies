angular.module('accent-technologies', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
  })

  .otherwise({
    redirectTo: '/home'
  })
});
