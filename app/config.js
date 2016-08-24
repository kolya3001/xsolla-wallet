'use strict';
module.exports = function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "pages/users.html",
        controller: "UsersCtrl",
        controllerAs: "users"
    })
    .when("/user/:id", {
        templateUrl: "pages/user.html",
        controller: "UserCtrl",
        controllerAs: "user"
    }).otherwise({
         redirectTo: "/"
    });

    $locationProvider.html5Mode(true);
};
