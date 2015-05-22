var test = require('../src/LetterCountI.js');
var assert = require('assert');

describe('LetterCountI()', function () {
    it('Should return greatest for Today, is the greatest day ever!',  function () {
            assert('greatest', test.LetterCountI('Today, is the greatest day ever!'));
    });
});