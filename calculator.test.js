const calculator = require("./calculator");

test("calculator to perform basic functions", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.divide(8, 4)).toBe(2);
  expect(calculator.multiply(3, 2)).toBe(6);
});
