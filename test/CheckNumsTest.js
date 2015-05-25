var test = require('../src/Checknums.js');
var assert = require('assert');

describe('Checknums(num1, num2)', function() {
    it('Should return true for 1,2', function () {
        assert.equal('true', test.CheckNums(1,2));
    });
    it('Should return false for 2,1', function () {
        assert.equal('false', test.CheckNums(2,1));
    });
        it('Should return -1 for 1,1', function () {
        assert.equal('-1', test.CheckNums(1,1));
    });
});