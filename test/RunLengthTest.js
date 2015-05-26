var test = require('../src/RunLength.js');
var assert = require('assert');

describe('RunLength(str)', function () {
   it('Should return "3w2g1o2p" for "wwwggopp"', function () {
      assert.equal('3w2g1o2p', test.RunLength('wwwggopp'));
   });
});