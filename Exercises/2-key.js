'use strict';

const generateKey = (length, possible) => {
  let string = [];
  while (string.length<length) {
    string.push(possible[Math.floor(Math.random()*length)]);
  }
  return string.join('');
};

module.exports = { generateKey };

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN
