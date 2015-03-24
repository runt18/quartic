var chai = require('chai');
chai.should();

var complex = require('mathjs').complex;

var solveQuartic = require('../index.js');

describe('Quartic solver', function() {
  it('should find the correct roots of the equation', function() {
    var coeffs = [5, 4, 3, 2, 1];

    var roots = solveQuartic(coeffs);

    roots[0].round(6).equals(complex( 0.137832,  0.678154)).should.be.true;
    roots[1].round(6).equals(complex( 0.137832, -0.678154)).should.be.true;
    roots[2].round(6).equals(complex(-0.537832,  0.358285)).should.be.true;
    roots[3].round(6).equals(complex(-0.537832, -0.358285)).should.be.true;
  });
});
