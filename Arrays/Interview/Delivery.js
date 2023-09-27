/*
You are an amazon delivery and you have some boxes that you have to deliver, but there are some conditions - You can take 2 boxes of same weight in one round you can take 3 boxes of same weight in one round You have to find the minimum number of rounds to deliver the boxes or -1 if it is not possible to deliver them. Example cases - Input: boxes - [2, 2, 3, 3, 2, 4, 4, 4, 4, 4] Output: 4 Explanation: 3 boxes of weight 2 in 1st round, 2 boxes of weight 3 in 2nd round, 3 boxes of wt 4 in 3rd and 2 boxes of wt 4 in 4th round. Input: boxes - [2, 3, 3] Output: -1 Explanation: There is only one box with weight 2 and we can only take either 2 or 3 boxes in one round not lesser.
*/

function minRoundsToDeliver(boxes) {
  // Count the frequency of each box weight
  const boxCounts = new Map();
  for (const box of boxes) {
    if (boxCounts.has(box)) {
      boxCounts.set(box, boxCounts.get(box) + 1);
    } else {
      boxCounts.set(box, 1);
    }
  }

  // Initialize the number of rounds
  let rounds = 0;

  // Iterate through unique box weights
  const uniqueWeights = Array.from(new Set(boxes));
  for (const weight of uniqueWeights) {
    const count = boxCounts.get(weight);

    // Handle cases where it's not possible to form a round
    if (count === 1) {
      return -1;
    } else if (count === 2) {
      rounds += 1;
    } else {
      rounds += Math.ceil(count / 3);
    }
  }

  return rounds;
}

// Test cases
const boxes1 = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
const boxes2 = [2, 3, 3];

console.log(minRoundsToDeliver(boxes1));  // Output: 4
console.log(minRoundsToDeliver(boxes2));  // Output: -1

