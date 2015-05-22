/*
Have the function LetterCountI(str) take the str parameter being passed and 
returns the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because 
it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
If there are no words with repeating letters return -1. Words will be separated 
by spaces. 
*/

var exports = module.exports = {};

exports.LetterCountI = function (str) { 

    var lettercount = function (word) {
      w = {};
      // count the instances of letters
      word.split('').forEach(function(letter) {
           if(w.hasOwnProperty(letter)) {
             w[letter] += 1;
           } else {
            w[letter] = 1;
           } 
      });

      // find the letter with the max occurences
      var max = Object.keys(w).reduce(function(a,b){
         return (w[a] > w[b]) ? a : b;
      });
      return w[max];
    }


  var words = str.split(' ');
  
  var x = {};
  // for each word
  words.forEach(function(word) {
    x[word] = lettercount(word);
  });
  // Find the word with the max occurrences
  // Reverse the array to favour the left in the original string
  var max = Object.keys(x).reverse().reduce(function(a,b) {
    return (x[a] > x[b]) ? a : b;
  });
  
  // If no repeating letters return -1
  return (x[max] == 1) ? -1 : max;
        
};