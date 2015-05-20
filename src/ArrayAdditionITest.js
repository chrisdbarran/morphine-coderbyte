var test = require('./ArrayAdditionI.js');
var assert = require('assert');

describe('ArrayAdditionI(arr)', function () {
    it('Should return true for  [4, 6, 23, 10, 1, 3] ', function () {
      assert.equal(true, test.ArrayAdditionI( [4, 6, 23, 10, 1, 3] ));
    });
    it('Should return false for [5,7,16,1,2]', function () {
        assert.equal(false, test.ArrayAdditionI([5,7,16,1,2]));
    });
    it('Should return true for [3,5,-1,8,12]', function () {
        assert.equal(true, test.ArrayAdditionI([3,5,-1,8,12]));
    });
});