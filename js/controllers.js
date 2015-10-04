app.controller('myController', function($scope) {
  $scope.greeting = "Hello World!";
});


app.controller('teaController', ['$scope', 'ShoppingCart', function($scope, ShoppingCart){

  // $scope.products = ShoppingCart.products;
  // console.log($scope.products);
  $scope.test = "test";

}]);
