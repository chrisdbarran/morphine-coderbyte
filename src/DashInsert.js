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