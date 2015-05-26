/*
Using the JavaScript language, have the function BinaryConverter(str) return 
the decimal form of the binary value. For example: if 101 is passed return 5, 
or if 1000 is passed return 8. 


Input = "100101"Output = "37"
Input = "011"Output = "3"
*/

var exports = module.exports = {};


exports.BinaryConverter = function(str) {
    var total = 0;
    str.split('').reverse().forEach(function (v, index) {
        if(v === '1') {
            total += Math.pow(2,index);
        }
    }); 
    return total;
};