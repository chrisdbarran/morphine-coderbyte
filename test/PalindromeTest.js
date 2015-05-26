var test = require('../src/Palindrome.js');
var assert = require('assert');

describe('Palindrome(str)', function () {
    it('Should return true for "racecar"', function (){
        assert.equal(true,test.Palindrome('racecar'));
    });
    it('Should return false for "redrum"', function() {
        assert.equal(false, test.Palindrome('redrum'));
    });
});