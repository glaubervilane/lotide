# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @glaubermarques/lotide`

**Require it:**

`const _ = require('@glaubermarques/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function2(AssertEqual)`: Tests to make sure that a variable is equal to other given variable
* `function1(assertArraysEqual)`: As assertEqual this function tests to make sure an array is equal to other given array
* `function3(assertObjectsEqual)`: As assertEqual this function tests to make sure an object is equal to other given object
* `function3(countLetters)`: This function just count letters into a string
* `function3(countOnly)`: This function just count specific selected items into a string or array of strings
* `function3(eqArrays)`: Is a test to check if 2 arrays are equal
* `function3(eqObjects)`: Is a test to check if 2 objects are equal
* `function3(findKey)`: Find keys from any object
* `function3(findKeyBaValue)`: Find keys from any object using its valus as reference
* `function3(flatten)`: Flatten arrays merging its elements
* `function3(head)`: Get the first element in the beginnig of an array
* `function3(tail)`: Get the last element in the end of an array
* `function3(midle)`: Get the element(s) in the middle of an array
* `function3(letterPosition)`: Check the position of selected letters into an string
* `function3(map)`: Map of elements using a given instruction
* `function3(head)`: Get the first element in the beginnig of an array
* `function3(takeUntil)`: Map of elements until a given condition is accomplish
* `function3(without)`: Map of elements without a given condition