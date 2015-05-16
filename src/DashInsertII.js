var exports = module.exports = {};

exports.DashInsertII = function (num) { 
var arr = num.toString().split('');

  if(arr.length == 1) { return arr[0]; }

  var ans = "";

  arr.reduce(function(p,v,index) { 
    ans += p;
    if(p != 0 && 0 != v)
    {
        if((p % 2 == 1) && (v % 2 == 1)) { ans += "-";}
        if((p % 2 == 0) && (v % 2 == 0)) { ans += "*";}
    }
    if(index == arr.length - 1) { ans += v;};
    return v;
  });
  
  return ans;
}