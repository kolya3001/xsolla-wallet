module.exports = function($http) {
    var urlBase = 'https://livedemo.xsolla.com/fe/test-task/baev';
    var UserHttp = {};

    UserHttp.createUser = function(user) {
      return $http({
              url: urlBase+'/users',
              method: 'POST',
              data: {
                user_id: user.user_id,
                user_name: user.user_name,
                user_custom: user.user_custom,
                email: user.user_email
              }
          })
      }

      return UserHttp;
}
