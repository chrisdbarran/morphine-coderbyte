var exports = module.exports = {};

exports.LetterCountI = function (str) { 

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

exports.lettercount = function (word) {
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
};