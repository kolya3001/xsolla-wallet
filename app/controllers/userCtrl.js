module.exports = function($scope,$routeParams,$location,userService) {
    var vm = this;
    vm.status;
    vm.id = $routeParams.id;

    $scope.main.header.showBack = true;

    vm.user;
    vm.changeBalanceComment;
    vm.currentBalance;
    vm.oldBalance;

    vm.startTime;
    vm.endTime;

    vm.getUserOperations = function() {
      userService.getOperations(vm.id,vm.startTime,vm.endTime)
          .success(function (operations) {
            if(operations.http_status_code == 422){
              vm.status = operations.message;
              vm.user.operations = [];
            }
            else if(operations.length == 0) {
              vm.status = 'No data to show';
              vm.user.operations = [];
            }
            else {
              vm.user.operations = operations;
              vm.status = '';
            }
          })
          .error(function (error) {
              vm.status = 'Unable to load users data: ' + error.message;
          });
      }

      vm.editUser = function(){
        userService.updateUser(vm.user)
            .success(function (response) {
                vm.status = 'User was successfully updated'
            })
            .error(function (error) {
                vm.status = 'Unable to load users data: ' + error.message;
            });
      }

      vm.changeBalance = function(){
        userService.changeBalance(vm.user.user_id,vm.currentBalance,vm.changeBalanceComment)
            .success(function (response) {
                vm.status = 'Balance was successfully changed'
            })
            .error(function (error) {
                vm.status = 'Unable to load users data: ' + error.message;
            });
      }

    userService.getUser(vm.id)
        .success(function (user) {
          $scope.main.header.text = user.user_name ? user.user_name : user.user_id;
          vm.user = user;
          vm.oldBalance = user.balance;
        })
        .error(function (error) {
            vm.status = 'Unable to load user data: ' + error.message;
        });

        if(!$location.search().tab)
          $location.search('tab',1)

          vm.changeTab = function (tab){
            vm.menu.activeItem = tab;
            $location.search('tab', tab)
          }

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
          text: 'Edit user'
        },
        {
          id: 4,
          text: 'Change balance'
        }
        ],
        activeItem: $location.search().tab
      }

        vm.openPicker = function(popup){
          if(popup == 1){
            vm.popupStart = true;
          }else {
            vm.popupEnd = true;
          }
        }
    }
