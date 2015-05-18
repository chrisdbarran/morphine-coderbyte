var test = require('./PowersOfTwo.js');

var assert = require('assert');

describe('PowersOfTwo(num)', function () {
   it('Should return true for 2', function () {
     assert.equal(true, test.PowersOfTwo(2));
   });
   it('Should return true for 4', function () {
      assert.equal(true, test.PowersOfTwo(4));
   });
   it('Should return false for 6', function() {
      assert.equal(false, test.PowersOfTwo(6));
   });
   it('Should return false for 124', function() {
      assert.equal(false, test.PowersOfTwo(124));
   });
});