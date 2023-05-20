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

// ===================================================================================================
// easy 5 724. Find Pivot Index

//Given an array of integers nums, calculate the pivot index of this array.
//
// The pivot index is the index where the sum of all the numbers strictly
// to the left of the index is equal to the sum of all the numbers strictly to the index's right.
//
// If the index is on the left edge of the array, then the left sum is 0 because
// there are no elements to the left. This also applies to the right edge of the array.
//
// Return the leftmost pivot index. If no such index exists, return -1.
//Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

const pivotIndex = function(nums) {
    let totalSum = 0;
    totalSum = nums.reduce((sum, num) => sum + num, 0)

    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i
        }
        leftSum = leftSum + nums[i]
    }

    return -1
};

// ===================================================================================================
// easy 6

//isPalindrome
var isPalindrome = function(x) {
    let newX = x.toString().split('').reverse().join('')
    console.log(x.toString().split(''))
    return x === Number(newX)
};

isPalindrome(10)

// ===================================================================================================
// easy 7  2635. Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

var map = function(arr, fn) {
    for( let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr
};
// O(n)

// ===================================================================================================
// easy 8  88. Merge Sorted Array
//https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&id=top-interview-150

var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);
};






