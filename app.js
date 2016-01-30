angular.module('Kevin', [])

.filter('troll', function () {
  return function (product) {
    return product.quantity + ' ' + product.name + ' restantes';
  };
})

.controller('test', function ($scope, $http) {
  $scope.show = function () {
    $scope.visible = true;
  };

  $scope.data = [{
    name: 'Licuadoras',
    quantity: 5
  }, {
    name: 'Corta Uñas',
    quantity: 7
  }, {
    name: 'Cerveza',
    quantity: 15
  }];

  $scope.today = new Date();

  $scope.change = function () {
    $scope.color = ['red', 'blue', 'orange'][Math.floor(Math.random() * 3)];
  };

  $scope.hide = function () {
    $scope.visible = false;
  };
})

.directive('casa', function () {
  return function ($scope, $element) {
    $element.on('click', function () {
      $element.css({color: 'red'});
    })
  };
});
