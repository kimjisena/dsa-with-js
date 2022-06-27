## Bubble Sort

Bubble sort is an `exchange sort` algorithm i.e it compares two items and 
swaps their positions if they're in the wrong order.

Given an `array` of `n` elements:
- Step through the `array` comparing adjacent elements
- If they're out of order, exchange them
- When you complete the entire scan without switching elements, the data is 
sorted, terminate.

**stability**: stable

**time complexity**: `O(n^2)`
- if dataset is already sorted, `O(n)`

**data structure**: `Array`

**bonus**: It's called _bubble sort_ because data _"bubbles"_ to the top. It 
may as well be called _sink sort_ because data at the top _"sinks"_ to the 
bottom.

**bonus++**: Never use bubble sort. You're better off avoiding it altogether.