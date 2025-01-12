function cipher(text, shift) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let currentIndex;
  let cipherIndex;
  let cipherValue;
  let cipherText = "";
  let char;
  let charLower;
  for (let i = 0; i < text.length; i++) {
    char = text[i];
    charLower = char.toLowerCase();
    currentIndex = alphabet.indexOf(charLower);
    if (currentIndex === -1) {
      cipherText = cipherText.concat(char);
    } else {
      cipherIndex = currentIndex + shift;
      if ((cipherIndex = currentIndex + shift) >= alphabet.length) {
        cipherIndex = cipherIndex - alphabet.length;
      }
      cipherValue = alphabet[cipherIndex];
      if (char === char.toUpperCase()) {
        cipherValue = cipherValue.toUpperCase();
      }
      cipherText = cipherText.concat(cipherValue);
    }
  }
  return cipherText;
}

module.exports = cipher;
