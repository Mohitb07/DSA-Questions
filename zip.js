function array(arr) {
  const first = arr[0];
  const second = arr[1];
  const firstArray = first.split(",");
  const secondArray = second.split(",");

  const maxSize =
    firstArray.length > secondArray.length
      ? firstArray.length
      : secondArray.length;

  const newFirst = new Array(maxSize).fill(0);
  const newSecond = new Array(maxSize).fill(0);

  const result = [];
  for (let i = 0; i < firstArray.length; i++) {
    newFirst[i] = parseInt(firstArray[i]);
  }
  for (let i = 0; i < secondArray.length; i++) {
    newSecond[i] = parseInt(secondArray[i]);
  }
  for (let i = 0; i < newFirst.length; i++) {
    result.push(newFirst[i] + newSecond[i]);
  }

  let string = "";
  for (let i = 0; i < result.length - 1; i++) {
    string = string + result[i] + "-";
  }
  string = string + result[result.length - 1];
  console.log(string);
}

array(["1,2,3,4", "2,3,5"]);
