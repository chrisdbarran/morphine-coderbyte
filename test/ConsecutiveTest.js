var test = require('../src/Consecutive.js');
var assert = require('assert');

describe('Consecutive(arr)', function () {
   it('Should return 1 for [1,3]', function () {
      assert.equal(1, test.Consecutive([1,3]));
   });
   it('Should return 2 for [4,8,6]', function () {
      assert.equal(2, test.Consecutive([4,8,6]));
   });
   //Input = 5,10,15 Output = 8
   it('Should return 8 for [5,10,15]', function () {
      assert.equal(8, test.Consecutive([5,10,15]));
   });
   //Input = -2,10,4 Output = 10
   it('Should return 10 for [-2,10,4]', function () {
      assert.equal(10, test.Consecutive([-2,10,4]));
   });
});