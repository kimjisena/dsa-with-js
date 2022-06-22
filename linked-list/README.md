## Linked Lists - Summary

A linked list is an ordered list of elements in which each element has a reference 
to the next element in the list or to the empty list.

**linked list constructors**
1. `emptyList()` - returns the empty list
2. `list.makeList(element)` - puts element at the rear of the list

**linked list condition**
- `list.isEmpty()` - returns false if list is non-empty

**linked list accessors**
1. `list.top()` - returns the element at the top of the list
2. `list.rest()` - returns the rest of the list without the top element

**linked list mutators**
1. `list.replaceTop(element)` - replaces the top element with `element`
2. `list.replaceRest(rest)` - replaces the rest of the list with `rest`