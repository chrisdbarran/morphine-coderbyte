var test = require('../src/PrimeTime.js')
var assert = require('assert')

describe('PrimeTime(num)', function () {
    it('Should return true for 2', function () {
        assert.equal(true, test.PrimeTime(2))
    })
    it('Should return true for 3', function () {
        assert.equal(true, test.PrimeTime(3))
    })
    it('Should return true for 13' , function () {
        assert.equal(true, test.PrimeTime(13))
    })
    it('Should return false for 10', function () {
        assert.equal(false, test.PrimeTime(10))
    })
    it('Should return false for 20000', function () {
        assert.equal(false, test.PrimeTime(20000))
    })
})