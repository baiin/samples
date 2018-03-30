var app = angular.module('app');

app.controller('one', one);

app.$inject = ['$scope'];

function one($scope){
    console.log('one');

    $scope.message = 'one message';
}