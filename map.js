const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Test Case 1: map function should return an array of the first letters of each word
const words = ["ground", "control", "to", "major", "tom"];
const expectedOutput1 = ["g", "c", "t", "m", "t"];
const test1 = map(words, word => word[0]);
assertArraysEqual(test1, expectedOutput1);

// Test Case 2: map function should return an array of the word lengths
const expectedOutput2 = [6, 7, 2, 5, 3];
const test2 = map(words, word => word.length);
assertArraysEqual(test2, expectedOutput2);

// Test Case 3: map function should return an array of the last letters of each word
const expectedOutput3 = ["d", "l", "o", "r", "m"];
const test3 = map(words, word => word[word.length - 1]);
assertArraysEqual(test3, expectedOutput3);