/*
Using the JavaScript language, have the function SimpleMode(arr) take the 
array of numbers stored in arr and return the number that appears most 
frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the 
output should be 4. If there is more than one mode return the one that 
appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because 
it appeared first). If there is no mode return -1. The array will not be empty. 
*/
var exports = module.exports = {};

exports.SimpleMode = function (arr) {
 var cnts = {};

    // Count the insidence of each number
    arr.forEach(function (item) {
        if(cnts.hasOwnProperty(item)) { 
          cnts[item]++;
        } else {
          cnts[item] = 1;
        }
    });

    // find any one that occurs most often.
    var simplemode = Object.getOwnPropertyNames(cnts).reduce(function(p,v){
        return (cnts[p] >= cnts[v]) ? p : v;
    });

    // If the count is one then there is no mode.
    if(cnts[simplemode] === 1) {
        return -1;
    }

    // See if any more elements have the same count.
    var modes = Object.getOwnPropertyNames(cnts).filter(function (e) {
        return cnts[simplemode] === cnts[e];
    }); 

    // If we have only one then we have the mode
    if(modes.length === 1) {
        return simplemode;
    }

    // If there is more than one mode return the first occurrence in arr 
    return modes.reduce(function (p,v) {
            return (arr.indexOf(Number(p)) < arr.indexOf(Number(v))) ? p : v;
           });
};