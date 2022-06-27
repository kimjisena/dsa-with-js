## Insertion Sort

Insertion sort does exactly what it's name says. It inserts an item into 
an already sorted array, leaving the array sorted. 

Given an array `a` of `n` items, insertion sort assumes item `a[0]` is already 
sorted, so it takes item `a[1]` and _"inserts"_ it into its correct position.

It then takes item `a[2]` and inserts it into the already sorted array `a[0]`...`a[1]`. 
This process is repeated until all items are sorted.

**stability**: stable

**time complexity**: `O(n^2)`

**data structure**: `Array`

**bonus**: insertion sort perfoms well for nearly sorted dataset