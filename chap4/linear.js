/**
 * data: a collection of integers
 * 
 * data structure: array
 * 
 * search problem specification
 * 
 * Given an array `a` and integer `x`(search key), find an integer `i` such that
 * 1. if there is no `j` such that `a[j]` is `x`, then `i` is -1
 * 2. otherwise, `i` is any `j` for which `a[j]` is `x`
 * 
 * time complexity: `O(n)`
 * - worst case: `n` iterations
 * - average case: `n/2` iterations
 */

function linear(a, x) {
    
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] === x) {
            return i;
        }
    }
    return -1;
}

module.exports = {
    linear,
};