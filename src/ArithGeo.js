/*
Have the function ArithGeo(arr) take the array of numbers stored in arr and 
return the string "Arithmetic" if the sequence follows an arithmetic pattern or 
return "Geometric" if it follows a geometric pattern. If the sequence doesn't 
follow either pattern return -1. An arithmetic sequence is one where the 
difference between each of the numbers is consistent, where as in a geometric 
sequence, each term after the first is multiplied by some constant or common 
ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no 
array will contain all the same elements. 
*/
var exports = module.exports = {};

exports.ArithGeo = function (arr) {

    var arith = function (arr) {
      var diff = arr[1] - arr[0];
      return arr.reduce(function (previous, current, index, array) {    
        return (previous) ? (diff === (array[index] - array[index-1])) : false;
      });
    };

    var geo = function (arr) {
      var ratio = arr[1] / arr[0];
      return arr.reduce(function (previous, current, index, array) {
      return (previous) ? (ratio === (array[index] / array[index - 1])) : false;
      });
    };

    if(arith(arr)){
        return 'Arithmetic';
    }

    if(geo(arr)){
        return 'Geometric';
    }

    // code goes here  
    return -1; 
};