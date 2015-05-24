var test = require('../src/FirstFactorial.js');
var assert = require('assert');

describe('FirstFactorial(num)', function () {
   it('Should return 24 for 4!', function () {
      assert.equal(24, test.FirstFactorial(4));
   });
});