module.exports = function (userService) {
  return {
    restrict: 'E',
    templateUrl: '/templates/createUser.html',
    link: function (scope, element, attrs) {

          scope.status;
          scope.user = {
            user_id: '',
            user_name: '',
            user_custom: '',
            user_email: ''
          }

      scope.createUser = function() {
        console.log(scope.user)
        userService.createUser(scope.user)
            .success(function (response) {
                console.log(response)
            })
            .error(function (error) {
                scope.status = 'Unable to createUser: ' + error.message;
            });
        }

      }
    }
  }
