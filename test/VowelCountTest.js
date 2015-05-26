var test = require('../src/VowelCount.js');
var assert = require('assert');

describe('VowelCount(str)',function () {
    it('Should return 0 for "nymph"', function () {
        assert.equal(0, test.VowelCount('nymph'));
    });
    it('Should return 1 for "the"', function () {
        assert.equal(1, test.VowelCount('the'));
    });
    it('Should return 3 for "vintage"', function () {
        assert.equal(3, test.VowelCount('vintage'));
    });
});