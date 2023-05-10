const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual : assertEqual,
  assertObjectsEqual : assertObjectsEqual,
  countLetters : countLetters,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  findKey : findKey,
  countOnly : countOnly,
  findKeyByValue : findKeyByValue,
  flatten : flatten,
  letterPositions : letterPositions,
  map : map
};