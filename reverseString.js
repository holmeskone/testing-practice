function reverseString(string) {
  let i;
  let reverse = "";
  for (i = [string.length] - 1; i >= 0; i--) {
    reverse = reverse.concat(string[i]);
  }
  return reverse;
}
module.exports = reverseString;
