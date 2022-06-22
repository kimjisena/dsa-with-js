## Binary Search

Used to search efficiently through a sorted array.

**example data:** a sorted collection of integers

**data structure:** array

**search problem specification**

Given an array `a` and integer `x`(search key), find an integer `i` such that
1. if there is no `j` such that `a[j]` is `x`, then `i` is `-1`
2. otherwise, `i` is any `j` for which `a[j]` is `x`

**time complexity:** `O(log n)`
- worst case: `log n` iterations
- average case: `log n` iterations

It also depends on how we arrive at the sorted array i.e the complexity of the sort algorithm.