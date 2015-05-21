var test = require('../src/OfflineMinimum.js');
var assert = require('assert');

describe('OfflineMinimum(strArr', function () {
   it('Should return ["1"] for ["1","E"]', function () {
        assert.deepEqual(["1"], test.OfflineMinimum(["1","E"]));
   }); 
   it('Should return ["4","1","2","3"] for ["4","E","1","E","2","E","3","E"]', function() {
        assert.deepEqual(["4","1","2","3"], test.OfflineMinimum(["4","E","1","E","2","E","3","E"]));
   });
   it('Should return ["1","2"] for ["1","2","E","E","3"]', function () {
        assert.deepEqual(["1","2"], test.OfflineMinimum(["1","2","E","E","3"]));
   });
});