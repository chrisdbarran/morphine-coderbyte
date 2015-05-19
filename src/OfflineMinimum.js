var exports = module.exports = {};

exports.OfflineMinimum = function(strArr) {
    var result = [];
    var set = [];

    // iterate over strArr
    strArr.forEach(function (item) {
        if(item != "E")
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

    return result.join(',');
}