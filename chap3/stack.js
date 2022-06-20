/**
 * stacks
 * 
 * stack is a last-in, first-out data structure
 * 
 * it is conveniently used to implement function call stacks where `caller` is pushed 
 * onto the stack until `callee` is popped, handled and returned.
 * 
 * stack constructors
 * 1. `emptyStack()` - returns an empty stack
 * 2. `stack.push(element)` - pushes an element onto the stack
 * 
 * stack accessors
 * 1. `stack.top()` - returns the topmost element on the stack
 * 2. `stack.pop()` - returns the stack without the topmost element
 * 
 * stack condition
 * - `stack.isEmpty()` - returns false if stack is not empty
 */

function getStack() {
    let stack = [];

    function isEmpty() {
        return stack.length === 0;
    }

    function push (element) {
        stack.push(element);
        return this;
    }

    function top () {
        if(isEmpty()) {
            throw {
                name: 'EmptyStackError',
                message: 'Can not access elements of an empty stack'
            };
        }
        return stack[stack.length - 1];
    }

    function pop () {
        if(isEmpty()) {
            throw {
                name: 'EmptyStackError',
                message: 'Can not access elements of an empty stack'
            };
        }
        stack.pop();
        return this;
    }

    return {
        isEmpty,
        push,
        top,
        pop
    }
}

// the empty stack
function emptyStack() {
    return getStack();
}

module.exports = {
    emptyStack,
};