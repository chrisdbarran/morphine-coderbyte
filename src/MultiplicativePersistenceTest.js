var test = require('./MultiplicativePersistence.js');
var assert = require('assert');

describe('MultiplicativePersistence(num)', function () {
 
   it('Should return 0 for 4', function () {
        assert.equal(0, test.MultiplicativePersistence(4));
   });
    it('Should return 3 for 39', function () {
        assert.equal(3, test.MultiplicativePersistence(39));
   });  
   it('Should return 2 for 25', function() {
        assert.equal(2, test.MultiplicativePersistence(25));
   });
});