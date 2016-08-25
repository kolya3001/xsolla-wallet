module.exports = function($scope,$routeParams,userService) {
    var vm = this;
    vm.status;
    vm.id = $routeParams.id;

    vm.user;

    vm.startTime;
    vm.endTime;

    vm.getUserOperations = function() {
      userService.getOperations(vm.id,vm.startTime,vm.endTime)
          .success(function (operations) {
            vm.user.operations = operations;
            console.log(operations);
          })
          .error(function (error) {
              vm.status = 'Unable to load users data: ' + error.message;
          });
      }

    userService.getUser(vm.id)
        .success(function (user) {
          $scope.main.header.text = user.user_name;
          vm.user = user
          console.log(user)
        })
        .error(function (error) {
            vm.status = 'Unable to load user data: ' + error.message;
        });

        vm.menu = {
        items:[{
          id: 1,
          text: 'User info'
        },
        {
          id: 2,
          text: 'View operations'
        },
        {
          id: 3,
          text: 'Edir user'
        },
        {
          id: 4,
          text: 'Change balance'
        },
        {
          id: 5,
          text: 'Delete user'
        }],
        activeItem: 1
      }

        vm.openPicker = function(popup){
          if(popup == 1){
            vm.popupStart = true;
          }else {
            vm.popupEnd = true;
          }
        }
    }
