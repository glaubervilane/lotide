const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters) {
  const lettersCounts = {};
  for (const letter of allLetters) {
    if (letter !== ' ') {
      if (!lettersCounts[letter]) {
        lettersCounts[letter] = 0;
      }
      lettersCounts[letter]++;
    }
  }
  return lettersCounts;
};


const phrase = "lighthouse in the house".split('');

const result1 = countLetters(phrase, { "l": true, "h": true, "u": true, "z": false });

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["u"], 2);
assertEqual(result1["z"], undefined);

module.exports = countLetters;