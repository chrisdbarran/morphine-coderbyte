/*
Have the function DashInsert(str) insert dashes ('-') between each two odd 
numbers in str. For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number. 
*/
var exports = module.exports = {};

exports.DashInsert = function (str) { 

  var arr = str.split('');
  var ans = '';

  arr.reduce(function(p,v,index) { 
    ans += p;
    if((p % 2 == 1) && (v % 2 == 1)) { ans += '-';}
    if(index == arr.length - 1) { ans += v;}
    return v;
  });
  
  return ans;
};