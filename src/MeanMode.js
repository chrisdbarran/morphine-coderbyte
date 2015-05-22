/*
Have the function MeanMode(arr) take the array of numbers stored in arr and 
return 1 if the mode equals the mean, 0 if they don't equal each other (ie. 
[5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
The array will not be empty, will only contain positive integers, and will 
not contain more than one mode. 
*/
var exports = module.exports = {};

exports.MeanMode = function (arr) { 
   var mean = this.findMean(arr);
   var mode = this.findMode(arr);

  return (mean == mode) ? 1 : 0;
};

exports.findMean = function (arr) {
  var total = arr.reduce(function(a,b) {
    return a + b;
  });

  return total / arr.length;
};

exports.findMode = function (arr) {
    var cnts = {};

    // Count the insidence of each number
    arr.forEach(function (item) {
        if(cnts.hasOwnProperty(item)) { 
          cnts[item]++;
        } else {
          cnts[item] = 1;
        }
    });

    // find the one that occurs most often.
    var mode = Object.getOwnPropertyNames(cnts).reduce(function(p,v){
        return (cnts[p] > cnts[v]) ? p : v;
    });

    // If the calculated mode only occurs once there is no mode so return -1
    return (cnts[mode] == 1) ? -1 : mode;
};