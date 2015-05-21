var test = require('../src/NumberAddition.js');

var assert = require('assert');

describe('NumberAddition(str)', function () {

  it('Should return 0 when there is no number', function () {
    assert.equal(0, test.NumberAddition("HelloWorld"));
  });
  
  it('Should return 1 when str is 1', function () {
    assert.equal(1, test.NumberAddition("1"));
  });

  it('Should return 84 for "75Number9"', function () {

    assert.equal(84, test.NumberAddition("75Number9"));
  });

  it('Should return 13 for "10 2One Number*1*"', function () {
    assert.equal(13, test.NumberAddition("10 2One Number*1*"));
  });

  it('Should return 91 for "88Hello 3World!"', function () {
    assert.equal(91, test.NumberAddition("88Hello 3World!"));
  });

  it('Should return 55 for "55Hello"', function () {
    assert.equal(55, test.NumberAddition("55Hello" ));
  });

  it('Should return 10 for "5Hello 5"', function () {
    assert.equal(10, test.NumberAddition("5Hello 5"));
  });

});