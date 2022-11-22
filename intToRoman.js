function intToRoman(num) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var result = "";
  for (var i = 0; i < map.length; i++) {
    while (num >= map[Object.keys(map)[i]]) {
      num -= map[Object.keys(map)[i]];
      result += Object.keys(map)[i];
    }
  }
  return result;
}

console.log(intToRoman(1));
