## Circular Doubly Linked Lists

This is an extension of a doubly linked list, except the first element references the last
element as the previous element, and the last element references the first element as 
the next in the list.

It is useful when we might need to move efficiently through a whole list of items without 
starting at a particular endpoint.

**Same operations as a doubly linked list except:**

- `firstElement.prev` => `lastElement`
- `lastElement.next` => `firstElement`