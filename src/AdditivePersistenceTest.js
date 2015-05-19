var test = require('./AdditivePersistence.js');
var assert = require('assert');

describe('AdditivePersistence(num)', function () {
   it('Should return 2 for 2718', function () {
        assert.equal(2, test.AdditivePersistence(2718));
   }); 
   it('Should return 0 for 4', function () {
        assert.equal(0, test.AdditivePersistence(4));
   });
   it('Should return 2 for 4457', function() {
        assert.equal(2, test.AdditivePersistence(4457));
   });
});