var test = require('../src/FirstReverse.js');
var assert = require('assert');

describe('FirstReverse(str)', function () {
   it('Should return tseT for Test', function () {
      assert.equal('tseT',test.FirstReverse('Test'));
   });
});