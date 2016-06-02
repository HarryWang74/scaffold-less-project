// 定义 module
angular.module('myApp', []);

// 定义 controller
angular.module('myApp').controller('myController', ['$scope',
    function($scope) {
      $scope.name = "gang";
    }
]);

// 定义 directive，自带 controller
angular.module('myApp').directive('myDirective', [function() {
    var controller = ['$scope', function ($scope) {
        // director controller content
    }];
    return {
        restrict: 'E',
        replace: true,
        scope: {
            // scope variable
        },
        // templateUrl: "",
        template: '<h2>From Directive</h2>',
        controller: controller
    }
}]);

// 定义 service 可以被 inject 到 controller 和 directive 里
angular.module('myApp').factory('myService', ['$q', function ($q) {
    var myService = {};
    myService.greeting = function () {
        return "From Service";
    };
    return myService;
}]);
