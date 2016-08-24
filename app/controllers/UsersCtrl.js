module.exports = function(UsersService) {
  var vm = this;
    vm.status;
    vm.users;

    vm.settings ={
      limit: 10,
      offset: 0
    }

    getUsers(vm.settings.limit, vm.settings.offset);

    function getUsers(limit,offset) {
      UsersService.getUsers(limit,offset)
          .success(function (users) {
              vm.users = users.data;
              console.log(vm.users)
          })
          .error(function (error) {
              vm.status = 'Unable to load users data: ' + error.message;
          });
  }

}
