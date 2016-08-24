require('angular')
var MainController = require('./controllers/MainController'),
Routing = require('angular-route'),
Config = require('./config'),
UsersCtrl = require('./controllers/UsersCtrl'),
UserCtrl = require('./controllers/UserCtrl'),
usersService = require('./services/usersService'),
userService = require('./services/userService'),
timeFilter = require('./filters/timeFilter')
closeModal = require('./directives/closeModal')
createUser = require('./directives/createUser')

var app = angular.module('app', [Routing])
app.config(['$routeProvider', '$locationProvider', Config])
app.service('usersService', ['$http', usersService])
app.service('userService', ['$http', userService])
app.controller('MainController', ['$scope', MainController])
app.controller('UsersCtrl', ['usersService', UsersCtrl])
app.controller('UserCtrl', ['$scope', UserCtrl])
app.filter('formatTime', [timeFilter])
app.directive('createUser', ['userService', createUser])
app.directive('closeModal', [closeModal])
