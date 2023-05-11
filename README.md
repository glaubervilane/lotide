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

* `function2(AssertEqual(param1, param2))`: A function that takes in two arguments: actual and expected. The purpose of this function is to compare the actual value with the expected value. If both values are strictly equal (i.e. have the same type and value), the function logs a message to the console stating that the assertion has passed. If the values are not strictly equal, the function logs a message to the console stating that the assertion has failed..
* `function1(assertArraysEqual(param1, param2))`: A function which takes in two arrays as parameters, arr1 and arr2. The function then calls another function eqArrays to compare arr1 and arr2 and checks if they are equal. If the two arrays are equal, the function prints a message indicating that the assertion has passed, otherwise it prints a message indicating that the assertion has failed.
* `function3(assertObjectsEqual(param1, param2))`: A function that takes in two objects actual and expected as parameters. It compares the objects for equality using the eqObjects function, which checks if the keys and values of the two objects match. If the objects are equal, the function logs a success message to the console.
* `function3(countLetters(parameter))`: A function that takes in a string of letters and returns an object that contains counts of each letter in the input string. The function loops through each letter in the input string, ignoring spaces, and for each letter, it checks whether it exists as a key in the lettersCounts object and return this value.
* `function3(countOnly(param1, param2)`: A function that takes in an array of strings that we need to look through and an object specifying what to count, returns a specific subset of those items
* `function3(eqArrays(param1, param2))`: A function that takes in two arrays as arguments and returns a boolean value indicating whether or not they are equal
* `function3(eqObjects(obj1, obj2))`: A function that takes in two objects and returns a boolean value indicating if both objects have identical keys with identical values. It first compares the length of the keys of both objects, if they are different, it returns false. Then it iterates through the keys of one of the objects (in this case object1) and checks if the value of each key is an array. If it is an array, it calls the eqArrays function to compare the arrays, otherwise, it compares the value of the key in object1 with the value of the same key in object2. 
* `function3(findKey(obj, callback))`: A function that takes in an object obj and a callback function callback as arguments. It iterates through each key in the object and invokes the callback function with the corresponding value. If the callback function returns a truthy value for any key, findKey returns that key. If none of the keys satisfy the condition of the callback function, findKey returns undefined.
* `function3(findKeyByValue(obj, value))`: A function that takes an object and a value as input parameters. It searches for the first key in the object which has the value passed as argument. If such a key exists, it returns the key. If there is no such key, the function returns undefined of the array
* `function3(head(arr))`: A function that takes an array as its input and returns the first element of the array. If the array is empty, the function returns undefined
* `function3(tail(arr))`: A function that takes an array as an argument and returns a new array that contains all elements of the original array except for the first one. If the original array is empty or has only one element, an empty array is returned
* `function3(midle(arr))`: A function that takes an array as input and returns the middle element(s) of the array. If the length of the array is less than or equal to 2, the function returns an empty array. If the length of the array is even, the function returns an array containing the two middle elements. If the length of the array is odd, the function returns an array containing the single middle element
* `function3(letterPosition(sentence))`: A function that takes a string sentence as an input and returns an object with keys as each letter in the sentence and their values as an array of their indices in the sentence. The function loops through each letter in the sentence, checks if it's not a space, and adds its index to the array corresponding to its letter in the results object. If there is no array created for the letter yet, a new array is created. Finally, the results object is returned
* `function3(map(array, callback))`: A function that takes an array and a callback function as input. It returns a new array where each element is the result of calling the callback function on the corresponding element of the input array
* `function3(takeUntil(array, callback))`: A function that takes in an array and a callback function. It iterates through each element of the array until the callback function returns a truthy value. At this point, the function returns a new array containing all the elements up to and including the element that caused the callback function to return true
* `function3(without(source, itemsToRemove))`: A function that takes two arrays as input: source and itemsToRemove. It returns a new array with all the elements from source that are not present in itemsToRemove