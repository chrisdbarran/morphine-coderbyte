/*
Have the function PowersofTwo(num) take the num parameter being passed which 
will be an integer and return the string true if it's a power of two. If it's 
not return the string false. For example if the input is 16 then your program 
should return the string true but if the input is 22 then the output should be 
the string false. 
*/
var exports = module.exports = {};

exports.PowersOfTwo = function (num) {
    if(num == 1) return true;
    // If the number is odd it's not -- might be superflous
    return (num % 2 === 0) ? this.PowersOfTwo(num / 2) : false;
};