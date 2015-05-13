function LetterCountI(str) { 

  var words = str.split(' ')
  
  var x = {}
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
        
}

function lettercount(word) {
  w = {};
    // count the instances of letters
  word.split('').forEach(function(letter) {
     (w.hasOwnProperty(letter))? w[letter] += 1 : w[letter] = 1;
  });

  // find the letter with the max occurences
  var max = Object.keys(w).reduce(function(a,b){
     return (w[a] > w[b]) ? a : b;
  });
  return w[max];
}


// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());           
