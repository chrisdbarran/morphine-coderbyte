var test = require('../src/PalindromeII.js');
var assert = require('assert');

describe('PalindromeII(str)', function () {
   it('Should return true for ana', function () {
        assert.equal(true,test.PalindromeII('ana'));
   });
   it('Should return true for Noel - sees Leon ', function () {
        assert.equal(true, test.PalindromeII('Noel - sees Leon'));
   }); 
   it('Should return true for A war at Tarawa! ', function () {
        assert.equal(true, test.PalindromeII('A war at Tarawa!'));
   });
   it('Should return true for Anne, I vote more cars race Rome-to-Vienna', 
     function () {
        assert.equal(true, 
            test.PalindromeII('Anne, I vote more cars race Rome-to-Vienna'));
     });
});