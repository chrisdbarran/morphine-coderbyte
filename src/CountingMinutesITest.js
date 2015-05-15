var test = require('./CountingMinutesI.js')

var assert = require("assert")

describe('CountingMinutesI()', function(){
    it('should return 60 when 9:00am-10:00am', function(){
      assert.equal(60,  test.CountingMinutesI("9:00am-10:00am"));
    });
    it('should return 1320 when 1:00pm-11:00am', function() {
        assert.equal(1320, test.CountingMinutesI("1:00pm-11:00am"));
    });
    it('should return 690 when 12:30pm-12:00am', function() {
        assert.equal(690, test.CountingMinutesI("12:30pm-12:00am"));
    });
    it('should return 1425 when 1:23am-1:08am', function() {
        assert.equal(1425, test.CountingMinutesI("1:23am-1:08am"));
    });
});