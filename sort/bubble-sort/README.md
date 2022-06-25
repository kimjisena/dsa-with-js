## Bubble Sort

Bubble sort is an `exchange sort` algorithm i.e it compares two items and 
swaps their positions if they're in the wrong order.

Consider an array `a` of `n` items that need sorting. Bubble sort starts 
at `n-1` and compares item `a[n-1]` with item `a[n-2]` and swaps them if 
need be.

At the end of this iteration, it will compare `a[1]` with `a[0]` 
and swap them accordingly. This means item `a[0]` will now be in place. It 
continues this way until all items are sorted.

**time complexity**: `O(n^2)`

**data structure**: `Array`

**bonus**: It's called _bubble sort_ because data _"bubbles"_ to the top. It 
may as well be called _sink sort_ because data at the top _"sinks"_ to the 
bottom.

**bonus++**: Never use bubble sort. You're better off avoiding it altogether.