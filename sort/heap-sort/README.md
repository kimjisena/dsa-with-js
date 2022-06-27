## Heap Sort

Heap sort is an insertion sort algorithm whereby the items to be sorted 
are first queued into a heap, and then the desired sorted output 
is obtained by taking the `root` and inserting it into position `[n - i - 1]` of the array.

**data structure**: `Array`/`Heap`

**time complexity**: `O(nlog n)`
- `O(n)` to heapify the array
- `O(logn)` to bubble the remaining items after `root` is removed