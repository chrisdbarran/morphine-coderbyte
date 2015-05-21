/*
Using the JavaScript language, have the function PrimeTime(num) take the
 num parameter being passed and return the string true if the parameter is a 
 prime number, otherwise return the string false. The range will be between 1 and 2^16. 

Since all non primes are made up of prime factors e.g 45 = 5 * 3 * 3
We only need to test primes smaller than the number under test
Also since for example 256 x 256 = 65536, one of the factors will always be less than the 
square root of the number under test so we only need to test primes upto the sqrt of the 
number under test.

So the solution here is first to calculate all the primes up to the 
square root of the number under test. Then see if any of these primes divides equally
into the number under test. If it does it's not a prime.

I'm using the every function in JS to check that every prime in the primes array passes the test.

*/

var exports = module.exports = {}

exports.PrimeTime = function (num) {


    if(num <= 2) { return true }
    // Fill an array with prime numbers upto 256
    var primes = [2]

    var isPrime = function (primeTest) {
      return primes.every(function (prime) {
         return (primeTest == prime) ? true : primeTest % prime != 0
      })
    }

    var max = (num < 4) ? 4 : Math.sqrt(num);

    for(i = 3; i < max; i++)
    {
      if(isPrime(i)) { primes.push(i) }
    }

    return isPrime(num);
}