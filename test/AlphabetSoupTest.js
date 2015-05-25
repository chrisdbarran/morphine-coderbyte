var test = require('../src/AlphabetSoup.js');
var assert = require('assert');

describe('AlphabetSoup(str)', function(){
    it('Should return ehllo for hello', function() {
        assert.equal('ehllo', test.AlphabetSoup('hello'));
    });
});