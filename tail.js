// ASSERTEQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length === 0 || array.length === 1) {
    return [];
  } else {
    return array.slice(1);
  }
};

// TEST CODE
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test case 2: Check if the input array is just with one element
const oneElement = tail([1]);
assertEqual(oneElement.length, 0); // ensure we get back an empty array
assertEqual(Array.isArray(oneElement), true); // ensure the result is an array

// Test Case 3: Empty array
const emptyArr = [];
const emptyArrTail = tail(emptyArr);
assertEqual(emptyArrTail.length, 0); // the tail of an empty array should be an empty array.