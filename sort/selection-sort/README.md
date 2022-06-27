## Selection Sort

Selection sort _"selects"_ the smallest the item in the array and swaps 
with the item the next appropriate position.

Given an array `a` of `n` items, 
- Search the array for the smallest item
- Exchange that element's position with item in `a[0]`
- Locate the second smallest item and exchange its position with 
item `a[1]`
- Continue in this manner until the array is sorted

It continues that way until all items are sorted.

**stability**: not stable

**time complexity**: `O(n^2)`

**data structure**: `Array`

**bonus**
- performance is not affected by the composition of the dataset
- can be used for datasets with large records and small keys