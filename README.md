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

* `function2(AssertEqual)`: A function that takes in 2 values and returns true if they are equal and false otherwise.
* `function1(assertArraysEqual)`: A function that prints an appropriate message after comparing the two arrays
* `function3(assertObjectsEqual)`: A function that takes in 2 objects and returns true if they are equal and false otherwise
* `function3(countLetters)`: A function that takes in a sentence and returns a count of each of the letters in the sentence
* `function3(countOnly)`: A function that takes in a collection of items and returns a specific subset of those items
* `function3(eqArrays)`: A function that takes in 2 arrays and returns true if the arrays are equal and false otherwise
* `function3(eqObjects)`: A function that takes in 2 objects and return true if they are equal and false otherwise
* `function3(findKey)`: A function that takes in an object and callback and returns the first key that meets the criteria specified in callback
* `function3(findKeyByValue)`: A function that takes in an object and a value and returns the first key that corresponds to that value
* `function3(flatten)`: A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array
* `function3(head)`: a function that takes in an array and returns the first element in the array
* `function3(tail)`: A function that takes in an array and returns everything except the first element of the array
* `function3(midle)`: A function that takes in an array and returns middle most element of the array
* `function3(letterPosition)`: A function that takes in a string and returns all indices of letter positions in the string
* `function3(map)`: A function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `function3(takeUntil)`: A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
* `function3(without)`: A function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array