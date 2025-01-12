function capitalise(string) {
  let i;
  let capitalise = "";
  for (i = 0; i < string.length; i++) {
    capitalise = capitalise.concat(string[i].toUpperCase());
  }
  return capitalise;
}
module.exports = capitalise;
