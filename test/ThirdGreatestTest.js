var test = require('../src/ThirdGreatest.js');

var assert = require('assert');

describe('ThirdGreatest(strArr)', function () {
  it("Should return one for ['one','four','seven']", function () {
    assert.equal("one", test.ThirdGreatest(['one','four','seven']));
  });
  it('Should return world for ["hello", "world", "before", "all"]', function () {
    assert.equal("world", test.ThirdGreatest(["hello", "world", "before", "all"] ));
  });
  it('Should return after for  ["hello", "world", "after", "all"]', function () {
    assert.equal("after", test.ThirdGreatest( ["hello", "world", "after", "all"] ));
  });
  it('Should return code for  ["coder","byte","code"]', function () {
    assert.equal("code", test.ThirdGreatest( ["coder","byte","code"]));
  });
  it('Should return abc for ["abc","defg","z","hijk"]', function () {
    assert.equal("abc", test.ThirdGreatest(["abc","defg","z","hijk"]));
  });
});