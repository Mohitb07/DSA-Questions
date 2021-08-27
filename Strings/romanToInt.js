// Write a function to convert Roman Number to Integer value

function romanToInt(s) {
    var map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
      if (i > 0 && map[s[i]] > map[s[i - 1]]) {
        result += map[s[i]] - 2 * map[s[i - 1]];
      } else {
        result += map[s[i]];
      }
    }
    return result;
  }
  