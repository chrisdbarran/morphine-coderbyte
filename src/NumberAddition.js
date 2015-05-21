var exports = module.exports = {};

exports.NumberAddition = function (str) {
    
   // regexp to match all the numbers
   var pattern = /\d+/g;

   var res = str.match(pattern);

   if(res === null) return 0;

   // Then add them up. 
   return res.reduce(function (p,v) {
     return Number(p) + Number(v);
   });
};