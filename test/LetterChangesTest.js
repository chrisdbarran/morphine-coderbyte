var test = require('../src/LetterChanges.js');
var assert = require('assert');

describe('LetterChanges(str)', function(){ 
    it('Should return cbObObt for bananas', function () {
        assert.equal('cbObObt',test.LetterChanges('bananas'));
    });
});