/*
Have the function DashInsertII(str) insert dashes ('-') between each two odd 
numbers and insert asterisks ('*') between each two even numbers in str. 
For example: if str is 4546793 the output should be 454*67-9-3. Don't count 
zero as an odd or even number
*/
var exports = module.exports = {};

exports.DashInsertII = function (num) { 
var arr = num.toString().split('');
var numArr = arr.map(function (e) {
  return Number(e);
});

  if(arr.length == 1) { return numArr[0]; }

  var ans = '';

  numArr.reduce(function(p,v,index) { 
    ans += p;
    if(p !== 0 && 0 !== v)
    {
        if((p % 2 === 1) && (v % 2 === 1)) { ans += '-';}
        if((p % 2 === 0) && (v % 2 === 0)) { ans += '*';}
    }
    if(index == arr.length - 1) { ans += v;}
    return v;
  });
  
  return ans;
};