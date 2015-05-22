/*
Have the function OffLineMinimum(strArr) take the strArr parameter being passed 
which will be an array of integers ranging from 1...n and the letter "E" and 
E","I",...,"E",...,"I"] where the I's stand for integers and the E means take 
out the smallest integer currently in the whole set. When finished, your 
program should return that new set with integers separated by commas. For 
example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your 
program should return 4,1,5. 
*/
var exports = module.exports = {};

exports.OfflineMinimum = function(strArr) {
    var result = [];
    var set = [];

    // iterate over strArr
    strArr.forEach(function (item) {
        if(item != 'E')
        {
           set.push(item); 
       } else {
         // find the minimum in the set
         var min = set.reduce(function (p,v) {
            return (p < v) ? p : v;
         });
         result.push(min);
         // remove the min from the set
         set = set.filter(function (value){
            return value > min;
         });
       }
        
    });

    return result;
};