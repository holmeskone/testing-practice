function analyzeArray(arr) {
  let max = arr[0];
  let min = arr[0];

  let sum = arr.reduce((prev, cur) => {
    if (cur > max) {
      max = cur;
    }

    if (cur < min) {
      min = cur;
    }

    return prev + cur;
  });

  return {
    max,
    min,
    length: arr.length,
    average: sum / arr.length,
  };
}

module.exports = analyzeArray;
