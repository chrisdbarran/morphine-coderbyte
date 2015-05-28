var test = require('../src/CaesarCipher.js');
var assert = require('assert');

describe('CaesarCipher(str, num)', function () {
   it('Should return "Ecguct Ekrjgt" for "Caesar Cipher" and 2', function (){
        assert.equal('Ecguct Ekrjgt', test.CaesarCipher('Caesar Cipher',2));
   }); 
   it('Should return "Jgnnq, Yqtnf!" for "Hello, World!"', function (){
        assert.equal('Jgnnq, Yqtnf!', test.CaesarCipher('Hello, World!',2))
   });
   it('Should return "Agnnqy Bkrrgt" for "Yellow Zipper', function (){
        assert.equal('Agnnqy Bkrrgt', test.CaesarCipher('Yellow Zipper',2));
   })
});