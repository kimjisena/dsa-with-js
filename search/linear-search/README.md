## Linear Search

This is a naive way of searching through a collection of items by looking at each item 
and deciding if it is the one we're looking for by comparing it to our search key.

**example data:** a collection of integers

**data structure:** array

**search problem specification**
 
Given an array `a` and integer `x`(search key), find an integer `i` such that
1. if there is no `j` such that `a[j]` is `x`, then `i` is -1
2. otherwise, `i` is any `j` for which `a[j]` is `x`

**time complexity:** `O(n)`
- worst case: `n` iterations
- average case: `n/2` iterations