var test = require('./DashInsertII.js');

var assert = require("assert");

describe('DashInsertII(str)', function () {
    it('should return 9-9 for 99', function() {
        assert.equal("9-9", test.DashInsertII(99));
    });
    it('should return 4547-9-3 for 454793', function() {
        assert.equal("4547-9-3", test.DashInsertII(454793));
    });
    it('should return 9-9-946 for 99946', function() {
        assert.equal("9-9-94*6", test.DashInsertII(99946));
    });
    it('should return 567-30 for 56730', function() {
        assert.equal("567-30", test.DashInsertII(56730));
    });

    it('should return 4*4 for 44', function(){
        assert.equal("4*4", test.DashInsertII(44));
    });

    it('should return  454*67-9-3 for 4546793', function() {
        assert.equal("454*67-9-3", test.DashInsertII(4546793));
    });

    it('should return 56*6*47-304 for 56647304', function () {
        assert.equal("56*6*47-304", test.DashInsertII(56647304));
    });
});