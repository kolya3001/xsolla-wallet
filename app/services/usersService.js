module.exports = function($http) {
   var urlBase = 'https://livedemo.xsolla.com/fe/test-task/baev';
   var UsersHttp = {};

   UsersHttp.getUsers = function(limit,offset){
      return $http.get(urlBase+'/users?limit='+limit+'&offset='+offset);
   }

   return UsersHttp;
}
