const capitalise = require("./capitalise");

test("capitalise red to RED", () => {
  expect(capitalise("red")).toBe("RED");
});
