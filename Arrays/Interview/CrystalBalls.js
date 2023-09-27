// Given two crystal balls that will break if dropped from high enough floor, find the highest floor that will break the ball.

const crystalBalls = (breaks) => {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = i; j < breaks.length; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
};

const breaks = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1];
console.log(crystalBalls(breaks)); // Output should be 3
