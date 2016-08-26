module.exports = function($scope,$routeParams,$location,userService) {
    var vm = this;
    vm.status;
    vm.id = $routeParams.id;

    $scope.main.header.showBack = true;

    vm.user;
    vm.changeBalanceComment;

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

      vm.editUser = function(){
        userService.updateUser(vm.user)
            .success(function (response) {
              console.log(response);
            })
            .error(function (error) {
                vm.status = 'Unable to load users data: ' + error.message;
            });
      }

      vm.changeBalance = function(){
        userService.changeBalance(vm.user.user_id,vm.user.balance,vm.changeBalanceComment)
            .success(function (response) {
              console.log(response);
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
