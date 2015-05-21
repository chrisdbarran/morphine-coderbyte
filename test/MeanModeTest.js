var test = require('../src/MeanMode.js')

var assert = require("assert")

describe('findMean(arr)', function() {
    it('should return 3 when arr = [5, 3, 3, 3, 1] ', function() {
        assert.equal(3, test.findMean([5, 3, 3, 3, 1] ));
    });
    it('should return 4 when arr = [4, 4, 4, 6, 2]', function() {
        assert.equal(4, test.findMean([4, 4, 4, 6, 2]));
    });
    it('should return 2 when arr = [1,2,3]', function() {
        assert.equal(2, test.findMean([1,2,3]));
    });
});

describe('findMode(arr)', function() {
    it('should return 3 when arr = [5,3,3,3,1]', function() {
        assert.equal(3, test.findMode([5,3,3,3,1]));
    });
    it('should return 4 when arr = [4, 4, 4, 6, 2]', function() {
        assert.equal(4, test.findMode([4, 4, 4, 6, 2]));
    });
    it('should return -1 when arr = [1,2,3]', function() {
        assert.equal(-1, test.findMode([1,2,3]));
    });
});

describe('MeanMode(arr)', function(){

    it('should return 1 when arr =  [5, 3, 3, 3, 1] ', function(){
      assert.equal(1,  test.MeanMode( [5, 3, 3, 3, 1] ));
    });
    it('should return 1 when arr = [4, 4, 4, 6, 2]', function() {
        assert.equal(1, test.MeanMode([4, 4, 4, 6, 2]));
    });
    it('should return 0 when arr = [1,2,3]', function() {
        assert.equal(0, test.MeanMode([1,2,3]));
    });
});

