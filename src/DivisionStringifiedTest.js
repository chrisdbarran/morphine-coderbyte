var test = require('./DivisionStringified.js')

var assert = require("assert")

describe('DivisionStringified()', function(){
    it('should return 1 when 2 / 3', function(){
      assert.equal("1",  test.DivisionStringified(2,3));
    });
    it('should return "12,346" when 123456789 / 10000', function() {
        assert.equal("12,346", test.DivisionStringified(123456789,10000));
    });
     it('should return "4,785" when 101077282 / 21123', function() {
        assert.equal("4,785", test.DivisionStringified(101077282,21123));
    });
     it('should return "7" when 175 / 24', function() {
        assert.equal("7", test.DivisionStringified(175, 24));
     });
});