var test = require('../src/SimpleSymbols.js');
var assert = require('assert');

/*
Input = "+d+=3=+s+" Output = "true"
Input = "f++d+"  Output = "false"
Input = +z+z+==+a+" Output = "true"
Input = "++d+===+c++==a" Output = "false"
*/

describe('SimpleSymbols(str)', function () {
   it('Should return true for +d+=3=+s+', function () {
        assert.equal(true, test.SimpleSymbols('+d+=3=+s+'));
   }); 
   it('Should return false for f++d+', function () {
        assert.equal(false, test.SimpleSymbols('f++d+'));
   });
   it('Should return true for +z+z+==+a+', function () {
        assert.equal(true, test.SimpleSymbols('+z+z+==+a+'));
   });
   it('Should return false for ++d+===+c++==a', function () {
        assert.equal(false, test.SimpleSymbols('++d+===+c++==a'));
   });
});