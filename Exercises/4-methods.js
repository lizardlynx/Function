'use strict';

const methods = iface => {
  const arr = [];
  for (const [key, value] of Object.entries(iface)) {
    if (typeof value === 'function') {
      arr.push([key, value.length]);
    }
  }
  return arr;
};

module.exports = { methods };

// Introspect all properties of iface object and
// extract function names and number of arguments
// For example:
/*const a = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};*/
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

//console.log(methods(a));
