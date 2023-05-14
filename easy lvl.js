//easy 1 2619. Array Prototype Last
// Повторил прототипы https://learn.javascript.ru/native-prototypes
// Повторил this контекст

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// ===================================================================================================
// easy 2 2629. Function Composition
const compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// ===================================================================================================
// easy 3 2634. Filter Elements from Array
//Given an integer array arr and a filtering function fn, return a new array with a
// fewer or equal number of elements.
//
// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
//
// Please solve it without the built-in Array.filter method.

const filter = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};