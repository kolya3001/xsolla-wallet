require('angular')
var MainController = require('./controllers/MainController'),
Routing = require('angular-route'),
Config = require('./config'),
UsersCtrl = require('./controllers/UsersCtrl'),
UserCtrl = require('./controllers/UserCtrl')

var app = angular.module('app', [Routing])
app.config(['$routeProvider', '$locationProvider', Config])
app.controller('MainController', ['$scope', MainController])
app.controller('UsersCtrl', ['$scope', UsersCtrl])
app.controller('UserCtrl', ['$scope', UserCtrl])
