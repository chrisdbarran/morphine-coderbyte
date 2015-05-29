/*
Input = 5,5,2,2,1Output = 5
Input = 3,4,1,6,10Output = -1
*/
var test = require('../src/SimpleMode.js');
var assert = require('assert');

describe('SimpleMode(arr)', function (){
   it('Should return 5 for 5,5,2,2,1', function () {
      assert.equal(5, test.SimpleMode([5,5,2,2,1]));
   }); 
   it('Should return -1 for  3,4,1,6,10', function() {
        assert.equal(-1, test.SimpleMode([3,4,1,6,10]));
   });
   it('Should return 4 for 10, 4, 5, 2, 4', function () {
        assert.equal(4, test.SimpleMode([10, 4, 5, 2, 4]));
   });
   it('Should return 4 for 4,4,5,5,2,1', function () {
        assert.equal(4, test.SimpleMode([4,4,5,5,2,1]));
   });
});