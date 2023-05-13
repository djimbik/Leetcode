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