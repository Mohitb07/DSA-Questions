const camelCase = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      result = result + string[i].toUpperCase();
    } else if (string[i] === string[i].toUpperCase()) {
      result = result + "\n";
      result = result + string[i].toLowerCase();
    }
  }
  return result;
};
console.log(camelCase("saveChangesInTheEditor"));
