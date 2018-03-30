var app = angular.module('app');

app.controller('three', three);

app.$inject = ['$scope'];

function three($scope) {
    console.log('three');

    $scope.message = 'three message';
}