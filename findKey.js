const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const results1 = findKey(data1, x => x.stars === 2);
assertEqual(results1, "noma");

const results2 = findKey(data1, x => x.stars === 3);
assertEqual(results2, "Akaleri");

const results3 = findKey(data1, x => x.stars === 4);
assertEqual(results3, undefined);

const data2 = {
  a: { num: 1 },
  b: { num: 2 },
  c: { num: 3 },
  d: { num: 4 }
};

const results4 = findKey(data2, x => x.num % 2 === 0);
assertEqual(results4, "b");

const results5 = findKey(data2, x => x.num % 5 === 0);
assertEqual(results5, undefined);