module.exports = function(UsersService) {
  var vm = this;
    vm.status;
    vm.users;

    vm.settings = {
      limit: 100,
      offset: 0
    }

    getUsers(vm.settings.limit, vm.settings.offset);

    function getUsers(limit,offset) {
      UsersService.getUsers(limit,offset)
          .success(function (users) {
            console.log(users)
              vm.users = users.data;
          })
          .error(function (error) {
              vm.status = 'Unable to load users data: ' + error.message;
          });
      }

      vm.createUser = function(){
        console.log(vm.user)
      }

}
