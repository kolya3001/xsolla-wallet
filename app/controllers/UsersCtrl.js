module.exports = function(UsersService) {
  var vm = this;
    vm.status;
    vm.users;

    vm.settings = {
      limit: 100,
      offset: 0
    }

    vm.getUsers = function() {
      UsersService.getUsers(vm.settings.limit,vm.settings.offset)
          .success(function (users) {
            console.log(vm.settings.limit, vm.settings.offset)
              vm.users = users.data;
          })
          .error(function (error) {
              vm.status = 'Unable to load users data: ' + error.message;
          });
      }

    vm.getUsers();

}
