var test = require('../src/LetterCapitalize.js');
var assert = require('assert');

describe('LetterCapitalize(str)', function () {
   it('Should return Letter for letter', function () {
        assert.equal('Letter', test.LetterCapitalize('letter'));
   });
   it('Should return Letter Capitalize for letter capitalize', function () {
        assert.equal('Letter Capitalize', 
            test.LetterCapitalize('letter capitalize'));
   });
});