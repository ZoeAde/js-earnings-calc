var code = require('../js/utility.js');

describe('getPercent function', function() {
  it('calculates a dollar percent given two inputs', function() {
    expect(code.getPercent(10, 20)).toEqual(2);
  });
});


describe('add new item to total', function() {
  it('adds subtotal to sum total for each meal increment', function() {
    expect(code.storeTotal(10,2)).toEqual(12);
    expect(code.storeTotal(10)).toEqual(11);
  });
});

describe('tip average', function() {
  it('finds the average of all tips', function() {
    expect(code.storeAvgTips(10, 2)).toEqual(5);
  });
});
