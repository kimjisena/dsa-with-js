## Doubly Linked Lists

A doubly linked list is a linked list in which each element has a reference to the 
next as well as to the previous element in the list.

A doubly linked list can be used, for instance, when working with a list of web pages 
where each page has content, a link to the next page and a link 
to the previous page.

**doubly linked list constructors**
1. `emptyDList()` - returns an empty doubly linked list
2. `dlist.makeListLeft(element)` - return a new dlist with element added to the left
3. `dlist.makeListRight(element)` - return a new dlist with element added to the right

**doubly linked list selectors**
1. `dlist.firstLeft()` - return the leftmost element
2. `dlist.restLeft()` - return a new dlist with all elements except the leftmost
3. `dlist.firstRight()` - return the rightmost element
4. `dlist.restRight()` - return a new dlist with all elements except the rightmost

**doubly linked list condition**
- `dlist.isEmpty()` - returns false if dlist is non-empty