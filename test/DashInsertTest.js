var test = require('../src/DashInsert.js');

var assert = require('assert');

describe('DashInsert(str)', function () {
    it('should return 9-9 for 99', function() {
        assert.equal('9-9', test.DashInsert('99'));
    });
    it('should return 4547-9-3 for 454793', function() {
        assert.equal('4547-9-3', test.DashInsert('454793'));
    });
    it('should return 9-9-946 for 99946', function() {
        assert.equal('9-9-946', test.DashInsert('99946'));
    });
    it('should return 567-30 for 56730', function() {
        assert.equal('567-30', test.DashInsert('56730'));
    });
});