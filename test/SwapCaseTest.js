var test = require('../src/SwapCase.js');

var assert = require('assert');

describe('SwapCase(str)' , function () {
  it('Should return hELLO wORLD for Hello World', function () {
    assert.equal("hELLO wORLD", test.SwapCase("Hello World"));
  });
  it('Should return "sUP dude!!?" for "Sup DUDE!!?"', function () {
    assert.equal("sUP dude!!?", test.SwapCase("Sup DUDE!!?"));
  });
});
