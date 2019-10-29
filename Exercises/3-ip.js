'use strict';


// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop

const ipToInt = (ip = '127.0.0.1') => {
  let sum = (a, b) => (a<<8) + parseInt(b);
  let ip2 = ip.split('.').reduce(sum, 0);
  return ip2;
};

ipToInt();

module.exports = { ipToInt };
