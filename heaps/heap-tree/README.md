## Heap Trees

A heap tree is a complete binary tree whereby the value of each node 
represents priority. The root always has the highest priority.

A binary tree is considered complete if all it's levels are filled 
(with the possible exception of the last level), and the nodes at the last 
level are placed as far to the left as possible.

Heap trees are used to implement priority queues. A regular queue operates 
in a first-come first-served basis while a priority queue serves the element 
with the highest priority first.

With heap trees, it's possible to insert and delete elements efficiently without 
having to keep the whole tree sorted as is the case for binary search trees. 
This is because we only ever want to remove the element with the highest priority, 
which fortunately for us, it will always be the root.

**formal definition**

A binary heap tree is a complete binary tree which is either empty or satisfies the 
following conditions: 
1. The `priority` of the `root` is higher than (or equal to) that of its `child`ren
2. The `left` and `right` subtrees of the `root` are heap trees

**heap tree condition**

- `heap.isEmpty()` - returns `false` if `heap` is non-empty

**heap tree accessors**

1. `heap.root()` - returns the `root` of the `heap`
4. `heap.lastLeaf()` - returns the `element` at the end of the `heap`

**heap tree mutators**

1. `heap.insert(element)` - inserts `element` into  the `heap`: `O(logn)`
2. `heap.deleteRoot()` - deletes the `root` of the `heap`: `O(logn)`
3. `heap.deleteAt(index)` - deletes element at `index` from `heap`: `O(logn)`

**heap tree constructor**
- `heap.heapify(array)` - returns a heap from `array` : `O(n)`