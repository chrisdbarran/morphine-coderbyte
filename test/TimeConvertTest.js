var test = require('../src/TimeConvert.js');
var assert = require('assert');

describe('TimeConvert(str)', function() {
    it('Should return 1:3 for 63', function (){
        assert.equal('1:3', test.TimeConvert(63));
    });
}); 