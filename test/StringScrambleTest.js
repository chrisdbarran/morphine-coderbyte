/*
Input = "cdore" & str2= "coder" Output = "true"
Input = "h3llko" & str2 = "hello"Output = "false"
*/
var test = require('../src/StringScramble.js');
var assert = require('assert');

describe('StringScramble(str1, str2', function () {
   it('Should return true for rkqodlw, world', function () {
        assert.equal(true, test.StringScramble('rkqodlw', 'world'));
   });
   it('Should return true for cdore,coder', function (){
        assert.equal(true,test.StringScramble('cdore','coder'));
   });
   it('Should return false for h3llko and hello', function () {
        assert.equal(false,test.StringScramble('h3llko','hello'));
   });
   it('Should return false for "win33er" and "winner"', function () {
        assert.equal(false,test.StringScramble('win33er','winner'));
   });
});