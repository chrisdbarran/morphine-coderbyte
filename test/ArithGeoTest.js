var test = require('../src/ArithGeo.js');
var assert = require('assert');

describe('ArithGeo(arr)', function () {
    it('Should return "Arithmetic" for [2, 4, 6, 8]', function () {
        assert.equal('Arithmetic',test.ArithGeo([2, 4, 6, 8]));
    });
    it('Should return "Geometric" for [2, 6, 18, 54]', function() {
        assert.equal('Geometric', test.ArithGeo([2, 6, 18, 54]));
    });
    it('Should return "-1" for [2, 2, 1, 3, 5]', function () {
        assert.equal('-1', test.ArithGeo([2, 2, 1, 3, 5]));
    });
});