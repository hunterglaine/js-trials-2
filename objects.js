"use strict";


// 1. countWords
function countWords(phrase) {
  // Return a plain object of each word and the no. of times they appear.

  const wordCounts = {}

  for (const word of phrase.split(' ')) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    }
    else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
