module.exports = function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.hideModal = function() {
          element.modal('toggle');
        };
      }
    }
  }
