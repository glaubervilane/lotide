const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }
  if (length % 2 === 0) {
    const midIndex = length / 2 - 1;
    return [array[midIndex], array[midIndex + 1]];
  } else {
    const midIndex = Math.floor(length / 2);
    return [array[midIndex]];
  }
};

module.exports = middle;