/*
Have the function CountingMinutesI(str) take the str parameter being passed 
which will be two times (each properly formatted with a colon and am or pm) 
separated by a hyphen and return the total number of minutes between the two 
times. The time will be in a 12 hour clock format. For example: if str is 
9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the 
output should be 1320. 
*/
var exports = module.exports = {};

exports.CountingMinutesI = function (str) { 


// Split on hyphen to get the two times
var times = str.split('-');


var time1 = times[0];
var time2 = times[1];

var hour1 = Number(time1.slice(0,time1.indexOf(':')));
var hour2 = Number(time2.slice(0,time2.indexOf(':')));

var min1 = Number(time1.slice(-4,-2));
var min2 = Number(time2.slice(-4,-2));

var ampm1 = time1.slice(-2);
var ampm2 = time2.slice(-2);

// Convert to minute of the day

var minday1 = (ampm1 == 'pm') ? (hour1 + 12) * 60 + min1 : hour1 * 60 + min1;
var minday2 = (ampm2 == 'pm') ? (hour2 + 12) * 60 + min2 : hour2 * 60 + min2;

  /* e.g.
     9:00am-10:00am 
    11:00am-13:00pm
  */
  if(minday2 > minday1) {
      return minday2 - minday1;
  } 
    /*
        1:00pm-11:00am
        4:00pm-1:00pm
        Next day
        mins to midnight + mins after midnight
    */
    return (1440 - minday1) + minday2;

};