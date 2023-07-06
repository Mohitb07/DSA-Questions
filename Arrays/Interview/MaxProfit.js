/*
Best Time to Buy and Sell Stock

    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

    Example 2:

    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.
 */

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const maxProfit = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[j] - arr[i]);
    }
  }
  return max;
};

const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
console.log(maxProfit(prices2));

// Solution 2: One Pass
// Time Complexity: O(n)
// Space Complexity: O(1)

const maxProfit2 = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // If current price is less than minPrice, set minPrice to current price
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      // If current price - minPrice is greater than maxProfit, set maxProfit to current price - minPrice
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfit2(prices));
console.log(maxProfit2(prices2));

// Solution 3: Kadane's Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)

const maxProfit3 = (prices) => {
  let maxCurrent = 0;
  let maxGlobal = 0;

  for (let i = 1; i < prices.length; i++) {
    maxCurrent = Math.max(0, (maxCurrent += prices[i] - prices[i - 1]));
    maxGlobal = Math.max(maxCurrent, maxGlobal);
  }
  return maxGlobal;
};

console.log(maxProfit3(prices));
console.log(maxProfit3(prices2));