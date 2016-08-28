module.exports = function(userService) {
    return {
        restrict: 'E',
        templateUrl: '/templates/createUser.html',
        scope: {
            updateUsers: '&'
        },
        link: function(scope, element, attrs) {

            scope.status;
            scope.user = {
                user_id: '',
                user_name: '',
                user_custom: '',
                user_email: ''
            }

            scope.createUser = function() {
              console.log(scope.userForm)
                if (scope.userForm.$valid) {
                    userService.createUser(scope.user)
                        .success(function(response) {
                            scope.updateUsers();
                            scope.hideModal();
                        })
                        .error(function(error) {
                            scope.status = 'Unable to createUser: ' + error.message;
                        });
                }
            }

        }
    }
}
