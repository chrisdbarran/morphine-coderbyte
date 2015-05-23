/*
Using the JavaScript language, have the function PrimeMover(num) return the 
numth prime number. The range will be from 1 to 10^4. For example: if num is 
16 the output should be 53 as 53 is the 16th prime number. 
*/
var exports = module.exports = {};

exports.PrimeMover = function (num) {
  // Calculate all the prime numbers up to num
  var primes = [2];
  // See PrimeTime for how to calculate primes.
  var isPrime = function (primeTest) {
      return primes.every(function (prime) {
         return (primeTest == prime) ? true : primeTest % prime !== 0;
      });
    };

    var i = 3;
    var max = (num < 3) ? 3 : num * num;

    
    while(i <= max)
    {
       if(isPrime(i)) { primes.push(i); } 
       i++;
    }
  // Add them to an array and return prime at num -1 in the array.
  return primes[num - 1];  
};