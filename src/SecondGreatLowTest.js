var sgt = require('./SecondGreatLow.js')

var assert = require("assert")
  describe('SecondGreatLow()', function(){
    it('should return 12 98 when the array is  [7, 7, 12, 98, 106]', function(){
      assert.equal("12 98",  sgt.SecondGreatLow([7, 7, 12, 98, 106]));
    })
    it('should return 98 12 when the array is [12,98]', function() {
        assert.equal("98 12", sgt.SecondGreatLow([12,98]));
    })
    it('should return 42 42 when the array is [1, 42, 42, 180]', function() {
        assert.equal("42 42", sgt.SecondGreatLow([1, 42, 42, 180]));
    })
    it('should return 80 80 when the array is [80,80]', function() {
        assert.equal("80 80", sgt.SecondGreatLow([80,80]));
    })
  })
