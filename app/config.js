'use strict';
module.exports = function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "templates/users.html",
        controller: "UsersCtrl",
        controllerAs: "users"
    })
    .when("/user/:id", {
        templateUrl: "templates/user.html",
        controller: "UserCtrl",
        controllerAs: "user"
    }).otherwise({
         redirectTo: "/"
    });

    $locationProvider.html5Mode(true);
};
