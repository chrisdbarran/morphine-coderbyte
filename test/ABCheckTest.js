var test = require('../src/ABCheck.js');
var assert = require('assert');

describe('ABCheck(str)', function () {
    it('Should return true for "lane borrowed"', function () {
        assert.equal(true, test.ABCheck('lane borrowed'));
    });
});