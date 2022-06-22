## Stacks

A stack is a last-in, first-out data structure i.e the last item to be pushed onto the 
stack is always the first to be processed.

A typical application of a stack is in a depth-first search (trees) where it is used to 
hold data temporarily during processing.

Also, a stack is conveniently used to implement function call stacks where the `caller` 
is pushed onto the stack until the `callee` is popped, handled and returned.

**stack constructors**
1. `emptyStack()` - returns an empty stack
2. `stack.push(element)` - pushes an element onto the stack
 
**stack accessors**
1. `stack.top()` - returns the topmost element on the stack
2. `stack.pop()` - returns the stack without the topmost element

**stack condition**
- `stack.isEmpty()` - returns false if stack is not empty