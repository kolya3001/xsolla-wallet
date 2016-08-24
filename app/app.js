require('angular')
var MainController = require('./controllers/MainController'),
Routing = require('angular-route'),
Config = require('./config'),
UsersCtrl = require('./controllers/UsersCtrl'),
UserCtrl = require('./controllers/UserCtrl')
UsersService = require('./services/UsersService')

var app = angular.module('app', [Routing])
app.config(['$routeProvider', '$locationProvider', Config])
app.service('UsersService', ['$http', UsersService])
app.controller('MainController', ['$scope', MainController])
app.controller('UsersCtrl', ['UsersService', UsersCtrl])
app.controller('UserCtrl', ['$scope', UserCtrl])
