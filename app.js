var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $controllerProvider) {
    app._controller = app.controller
    app.controller = function (name, constructor) {
        $controllerProvider.register(name, constructor);
        return (this);
    }

    $stateProvider
        .state('one', {
            url: "/one",
            templateUrl: "views/one.html",
            controller: "one",
            resolve: {
                deps: function ($q, $rootScope) {
                    var deferred = $q.defer();
                    require(["controllers/one"], function (tt) {
                        $rootScope.$apply(function () {
                            deferred.resolve();
                        });
                        deferred.resolve()
                    });
                    return deferred.promise;
                }
            }
        })
        .state('two', {
            url: "/two",
            templateUrl: "views/two.html",
            controller: "two",
            resolve: {
                deps: function ($q, $rootScope) {
                    var deferred = $q.defer();
                    require(["controllers/two"], function (tt) {
                        $rootScope.$apply(function () {
                            deferred.resolve();
                        });
                        deferred.resolve()
                    });
                    return deferred.promise;
                }
            }
        })
        .state("three", {
            url: "/three",
            templateUrl: "views/three.html",
            controller: "three",
            resolve: {
                deps: function ($q, $rootScope) {
                    var deferred = $q.defer();
                    require(["controllers/three"], function (tt) {
                        $rootScope.$apply(function () {
                            deferred.resolve();
                        });
                        deferred.resolve()
                    });
                    return deferred.promise;
                }
            }
        });

});