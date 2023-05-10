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

const takeUntil = function(array, callback) {
  const phrase = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return phrase;
    }
    phrase.push(array[i])
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
const actual1 = takeUntil(data1, x => x < 0);
assertArraysEqual(expected1, actual1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = ["I've", "been", "to", "Hollywood"];
const actual2 = takeUntil(data2, x => x === ',');
assertArraysEqual(expected2, actual2);

module.exports = takeUntil;