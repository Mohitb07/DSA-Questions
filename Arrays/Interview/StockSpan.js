/*The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate the span of stocks price for all n days. 
The span Si of the stocks price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day.
For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}.

Example 1:

Input: 
N = 7, price[] = [100 80 60 70 60 75 85]
Output:
1 1 1 2 1 4 6
Explanation:
Traversing the given input span for 100 
will be 1, 80 is smaller than 100 so the 
span is 1, 60 is smaller than 80 so the 
span is 1, 70 is greater than 60 so the 
span is 2 and so on. Hence the output will 
be 1 1 1 2 1 4 6.
Example 2:

Input: 
N = 6, price[] = [10 4 5 90 120 80]
Output:
1 1 2 4 5 1
Explanation:
Traversing the given input span for 10 
will be 1, 4 is smaller than 10 so the 
span will be 1, 5 is greater than 4 so 
the span will be 2 and so on. Hence, the 
output will be 1 1 2 4 5 1.
*/

// Solution 1 O(n^2)

const stockSpan = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        break;
      } else {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85])); // [1, 1, 1, 2, 1, 4, 6]
console.log(stockSpan([10, 4, 5, 90, 120, 80])); // [1, 1, 2, 4, 5, 1]

// Solution 2 O(n)

const stockSpan2 = (arr) => {
  const result = [];
  const index = [];
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      index.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1].value > arr[i]) {
      index.push(stack[stack.length - 1].index);
    } else if (stack.length > 0 && stack[stack.length - 1].value <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1].value <= arr[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        index.push(-1);
      } else {
        index.push(stack[stack.length - 1].index);
      }
    }

    stack.push({
      value: arr[i],
      index: i,
    });
  }

  for (let i = 0; i < arr.length; i++) {
    let computed = i - index[i];
    result.push(computed);
  }

  return result;
};

console.log(stockSpan2([100, 80, 60, 70, 60, 75, 85])); // [1, 1, 1, 2, 1, 4, 6]
[-1, -1, -1];
console.log(stockSpan2([10, 4, 5, 90, 120, 80])); // [1, 1, 2, 4, 5, 1]
