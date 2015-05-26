var test = require('../src/WordCount.js');
var assert = require('assert');

describe('WordCount(str)', function () {
    it('Should return 1 for "return"', function (){
        assert.equal(1,test.WordCount('return'));
    });
      it('Should return 2 for "word count"', function (){
        assert.equal(2,test.WordCount('word count'));
    });
    it('Should return 7 for "one two three four five six seven"', function (){
        assert.equal(7,test.WordCount('one two three four five six seven'));
    });
});