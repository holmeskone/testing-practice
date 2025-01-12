const analyze = require("./analyzeArray");

test("The average, min, max and length of [1,8,3,4,2,6] are 4, 1, 8, 6", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
