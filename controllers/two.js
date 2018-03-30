var app = angular.module('app');

app.controller('two', two);

app.$inject = ['$scope'];

function two($scope){
    console.log('two');

    $scope.message = 'two message';
}