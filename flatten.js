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

const flatten = function(inputArray) {
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      result = result.concat(inputArray[i]);
    } else {
      result.push(inputArray[i]);
    }
  }
  return result;
};

// Test case 1: Flattening an array with nested arrays
const arr1 = [1, 2, [3, 4], 5, [6]];
const expected1 = [1, 2, 3, 4, 5, 6];
const result1 = flatten(arr1);
assertArraysEqual(result1, expected1);

// Test case 2: Flattening an array with no nested arrays
const arr2 = [1, 2, 3, 4, 5];
const expected2 = [1, 2, 3, 4, 5];
const result2 = flatten(arr2);
assertArraysEqual(result2, expected2);

// Test case 3: Flattening an empty array
const arr3 = [];
const expected3 = [];
const result3 = flatten(arr3);
assertArraysEqual(result3, expected3);

// Test case 4: Flattening an array of nested arrays where some of the nested arrays are empty
const arr4 = [1, [], [3, 4], 5, []];
const expected4 = [1, 3, 4, 5];
const result4 = flatten(arr4);
assertArraysEqual(result4, expected4);

module.exports = flatten;