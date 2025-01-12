const caesar = require("./caesarCipher");

test("shift values of alphabet by 3 to encrypt message", () => {
  expect(caesar("xyz", 3)).toBe("abc");
});
