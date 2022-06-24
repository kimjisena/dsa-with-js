## Selection Sort

Selection sort _"selects"_ the smallest the item in the array and swaps 
with the item the next appropriate position.

Given an array `a` of `n` items, selection sort finds the smallest item in 
the `n - 1` items and swaps it with item `a[0]`. Then it goes through the 
remaining `n - 2` items that need sorting, finds the smalles item and swaps 
it with item `a[1]`.

It continues that way until all items are sorted.

**time complexity**: `O(n^2)`

**data structure**: `Array`