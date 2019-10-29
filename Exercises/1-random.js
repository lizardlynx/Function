'use strict';

const random = (min, max) => {
  if (max == undefined) {
    return min;
  }
  const a = Math.floor((max - min+1) * Math.random() + min);
  return a;
};

//console.log(random(5,10));

module.exports = { random };

// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN
