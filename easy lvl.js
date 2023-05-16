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

// ===================================================================================================
// easy 3 1. Two Sum

//Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.
//
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
//
// You can return the answer in any order.

var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
};

// Решение O(n), потому что по массиву nums мы проходимся 1 раз, а map работает на скорости O(1)


// ===================================================================================================
// easy 4 1480. Running Sum of 1d Array

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//
// Return the running sum of nums.
// Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


var runningSum = function(nums) {
    let newArr = []
    let s

    nums.reduce((sum, item) => {
        s = sum + item
        newArr.push(s)
        return s
    }, 0)

    return newArr
};

















