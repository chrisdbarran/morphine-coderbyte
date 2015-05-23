var test = require('../src/PrimeMover.js');
var assert = require('assert');

describe('PrimeMover(num)', function () {
    it('Should return 2 for 1', function () {
        assert.equal(2, test.PrimeMover(1));
    });
    it('Should return 3 for 2', function () {
        assert.equal(3, test.PrimeMover(2));
    });
    it('Should return 5 for 3', function () {
        assert.equal(5, test.PrimeMover(3));
    });
    it('Should return 53 for 16', function (){
        assert.equal(53, test.PrimeMover(16));
    });
    it('Should return 541 for 100', function () {
        assert.equal(541, test.PrimeMover(100));
    });
});