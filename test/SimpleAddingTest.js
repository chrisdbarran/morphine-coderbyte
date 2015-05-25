var test = require('../src/SimpleAdding.js');
var assert = require('assert');

describe('SimpleAdding()', function () {
   it('Should return 1 for 1', function() {
        assert.equal(1, test.SimpleAdding(1));
   });
   it('Should return 3 for 2', function() {
        assert.equal(3, test.SimpleAdding(2));
   });
   it('Should return 6 for 3', function() {
        assert.equal(6,test.SimpleAdding(3));
   });
});