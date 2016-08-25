'use strict';
module.exports = function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "pages/users.html",
        controller: "usersCtrl",
        controllerAs: "users"
    })
    .when("/user/:id", {
        templateUrl: "pages/user.html",
        controller: "userCtrl",
        controllerAs: "user"
    }).otherwise({
         redirectTo: "/"
    });

    $locationProvider.html5Mode(true);
};
