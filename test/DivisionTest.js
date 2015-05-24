var test = require('../src/Division.js');
var assert = require('assert');

describe('Division(num1,num2)', function () {
   it('Should return 1 for Division(1,2)', function () {
        assert.equal(1, test.Division(1,2));
   });
   it('Should return 4 for Division(12,16)', function () {
        assert.equal(4, test.Division(12,16));
   });
   it('Should return 18 for Division(36, 54', function () {
        assert.equal(18, test.Division(36, 54));
   });
});