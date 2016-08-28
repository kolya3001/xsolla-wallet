describe('MainController', function() {
  var scope;

  beforeEach(function(){
    module('app');

    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      var localInjections = {
        $scope: scope,
      };
      $controller('MainController as main', localInjections);
    });
  });

  it('should init properly', function() {
    expect(scope.main.header).to.deep.equal({text: '',showBack: false});
  });
});
