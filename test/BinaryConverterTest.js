var test = require('../src/BinaryConverter.js')
var assert = require('assert');

describe('BinaryConverter(str)', function () {
    it('Should return 3 for 011', function () {
        assert.equal(3, test.BinaryConverter('011'));
    });
    it('Should return 37 for 100101', function () {
        assert.equal(37, test.BinaryConverter('100101'));
    })
});