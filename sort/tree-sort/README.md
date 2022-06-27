## Tree Sort

This is an insertion sort algorithm whereby the items to be sorted are 
inserted into an initially empty binary search tree. The sorted output 
is obtained by traversing the tree in order.

Tree is desirable when items need to be frequently deleted or inserted 
as these operations can be carried efficiently.

**note**: of course, the tree will have to balanced.

**data structure**: `Array`/`Binary search tree`

**time complexity**: `O(nlog n)`
- `n` items to insert at a cost of `O(log n)` per item