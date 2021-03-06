## Binomial Heaps

A binomial heap is similar to binary heap except it offers efficient 
merging and insertion. A binomial heap is implemented as a collection of 
binomial trees.

A **binomial tree** is defined recursively as:
1. A binomial tree of order `0` is a single node
2. A binomial tree of order `k` has a `root` with `child`ren that are `root`s 
of binomial trees of orders `k - 1`, `k - 2`, ..., `2`, `1`, `0` (in that order)

A binomial tree of order `k` has:
- `height`= `k`
- `node`s = `2^k`

The number of nodes `n` at a given height `r` of a binomial tree of order `k` obey 
the binomial theorem for a positive integral index i.e `n = kCr`

A **binomial heap** is constructed as a collection of binomial trees with these 
properties:
1. There can only be `zero` or `one` binomial tree of each order
2. Each constituent binomial tree must satisfy the priority ordering 
property i.e each node must have priority less than or equal to its parent 

**core operation**

The most important operation for binomial heaps is `merge` which can be used to 
implement `insertion` and `deletion`.

Two binomial trees of order `j` are `merge`d to form a binomial tree of order `j + 1`

**heap tree mutators**

1. `heap.insert(element)` - inserts `element` into  the `heap`: `O(1)`
2. `heap.deleteRoot()` - deletes the `root` of the `heap`: `O(logn)`

**heap tree constructor**

- `heap.heapify(array)` - returns a heap from `array`: `O(n)`