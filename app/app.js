require('angular')
var MainController = require('./controllers/MainController'),
Routing = require('angular-route'),
Config = require('./config'),
usersCtrl = require('./controllers/usersCtrl'),
userCtrl = require('./controllers/userCtrl'),
usersService = require('./services/usersService'),
userService = require('./services/userService'),
timeFilter = require('./filters/timeFilter'),
rangeFilter = require('./filters/rangeFilter'),
closeModal = require('./directives/closeModal'),
createUser = require('./directives/createUser'),
datePicker = require('angular-ui-bootstrap')

var app = angular.module('app', [Routing, datePicker]);
app.config(['$routeProvider', '$locationProvider', Config])
app.service('usersService', ['$http', usersService])
app.service('userService', ['$http', userService])
app.controller('MainController', [MainController])
app.controller('usersCtrl', ['$scope','usersService', usersCtrl])
app.controller('userCtrl', ['$scope','$routeParams','userService', userCtrl])
app.filter('formatTime', [timeFilter])
app.filter('range', [rangeFilter])
app.directive('createUser', ['userService', createUser])
app.directive('closeModal', [closeModal])
