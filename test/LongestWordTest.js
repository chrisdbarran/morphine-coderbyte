var test = require('../src/LongestWord.js');
var assert = require('assert');

describe('LongestWord(sen)', function () {
   it('Should return largest for \"the largest word in the string\"', 
    function () {
        assert.equal('largest', 
            test.LongestWord('the largest word in the string'));
    });
   it('Shold return string for \"the largest string in the apples\"',
     function () {
        assert.equal('string', 
            test.LongestWord('the abc string in the apples'));
     });
});