/**
 * data: a sorted collection of integers
 * 
 * data structure: array
 * 
 * search problem specification
 * 
 * Given an array `a` and integer `x`(search key), find an integer `i` such that
 * 1. if there is no `j` such that `a[j]` is `x`, then `i` is -1
 * 2. otherwise, `i` is any `j` for which `a[j]` is `x`
 * 
 * time complexity: `O(log n)`
 * - worst case: `log n` iterations
 * - average case: `log n` iterations
 * 
 * it also depends on how data is sorted i.e the complexity of the sort algorithm
 */

export function binary(a, x) {
    let left = 0,
        right = a.length - 1,
        mid;
        while (left < right) {
            mid = Math.floor((left + right)/2);
            if (x > a[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return a[left] === x ? left : -1;
}