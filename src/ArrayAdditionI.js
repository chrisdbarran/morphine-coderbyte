/*
Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
*/
var exports = module.exports = {};

exports.ArrayAdditionI = function (arr) {
  
  // Find the max number in the array (could be two or more?)
  var max = arr.reduce(function (p,v) {
    return (p > v) ? p : v;
  });

  // remove the max number of the array
  // Let's assume there's no repetition
  var items = arr.filter(function (item)
  {
    return item < max;
  });

  var perms = [];

  var swap = function (i , j) {
      var t = items[i];
      items[i] = items[j];
      items[j] = t;
   }

   var permute = function (n) { 
      if(n == 1) {
          // Need to push a copy of the array at this point
          // Otherwise all elements will point to the same
          // Array which will be the last one generated
          perms.push(items.slice());
      } else {
          for (var i = 0 ; i < n ; i++) {
              permute(n - 1);
              swap((n % 2) ? 0 : i, n - 1);
          }
      }
   }

   // generate all the permutations
   permute(items.length);

   // Progressively add up all permutations to see if any of them
   // add up to the max.

   var works = false;

   perms.forEach(function (perm){
      // each permutation is an array so loop over those
      perm.reduce(function (p,v) {
        if(p + v == max) { works = true};
        return p + v;
      });
   });
   return works;
};