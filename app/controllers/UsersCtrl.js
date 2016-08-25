module.exports = function($scope, usersService) {
  var vm = this;
    vm.status;
    vm.users;

    $scope.main.header.text = 'Xsolla wallet';
    $scope.main.header.showBack = false;

    vm.settings = {
      limit: 10,
      offset: 0,
      total: 0,
      pageCount: 0,
      currentPage: 0,
      startFrom: 0
    }

    vm.getUsers = function() {
      usersService.getUsers(vm.settings.limit,vm.settings.offset)
          .success(function (users) {
            console.log(vm.settings)
              vm.settings.total = users.recordsTotal;
              vm.settings.pageCount = Math.ceil(users.recordsTotal / vm.settings.limit);
              vm.users = users.data;
          })
          .error(function (error) {
              vm.status = 'Unable to load users data: ' + error.message;
          });
      }

      vm.changePage = function(page){
        if(page >= 0 && page < vm.settings.pageCount ){
          vm.settings.currentPage = page;
          vm.settings.startFrom = page;
          vm.settings.offset = page * vm.settings.limit;
          vm.getUsers();
        }
      }

    vm.getUsers();

}
