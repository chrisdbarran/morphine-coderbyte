var test = require('../src/ExOh.js');
var assert = require('assert');

describe('ExOh(str)', function () {
    it('Should return true for "xo"', function () {
        assert.equal(true,test.ExOh('xo'));
    });
    it('Should return false for "xooxxxxooxo"', function () {
        assert.equal(false, test.ExOh('xooxxxxooxo'));
    });
});