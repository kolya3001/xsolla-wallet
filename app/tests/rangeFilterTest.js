describe('rangeFilter', function() {

  var $filter;
  beforeEach(function(){
    module('app');

    inject(function(_$filter_){
      $filter = _$filter_;
    });
  });

  it('returns full range', function() {
    var range = $filter('range');
    expect(range([],10,2)).to.deep.equal([1,2,3,4,5,6,7,8,9]);
  });

  it('returns nothing', function() {
    var range = $filter('range');
    expect(range([],0,0)).to.deep.equal([]);
  });

  it('returns from 3', function() {
    var range = $filter('range');
    expect(range([],7,5)).to.deep.equal([3,4,5,6]);
  });

});
