var chai = require('chai');
chai.should();

var math = require('mathjs');

var solveQuartic = require('../index.js');

describe('Quartic solver', function() {
  it('should find the correct roots of the equation', function() {
    var coeffs = [5, 4, 3, 2, 1];

    var roots = solveQuartic(coeffs);

    var expected = [
      math.complex(0.137832,  0.678154),
      math.complex(0.137832,  -0.678154),
      math.complex(-0.537832, 0.358285),
      math.complex(-0.537832, -0.358285)
    ];

    roots.should.deep.equal(expected);
  });
});
