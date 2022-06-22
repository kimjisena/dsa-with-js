## Queues

A queue is exactly what it's name says it is. It is a first-in, first-out data structure 
where elements are added to the rear and removed from the front.

A typical application of a queue is in a breadth-first search (trees) where it is used to 
hold data temporary during processing.

Also, it is conveniently used for scheduling jobs: for instance in an `event loop` and `print spools`.

**queue constructors**
1. `emptyQueue()` - returns an empty queue
2. `queue.push(element)` - returns a queue with element added to the end a.k.a `enqueue`
 
**queue selectors**
1. `queue.top()` - returns the top (front) element of the queue
2. `queue.pop()` - returns the queue without the top (front) element a.k.a `dequeue`
 
**queue condition**
- `queue.isEmpty()` - returns false is queue is non-empty