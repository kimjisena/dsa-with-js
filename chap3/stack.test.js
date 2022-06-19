const {emptyStack} = require('./stack.js');

describe('stack: initial tests', () => { 
    let stack = emptyStack();

    test('stack.isEmpty() is true for empty stack', () => { 
        expect(stack.isEmpty()).toBe(true);
    });
 });

 describe('stack: core operations', () => { 
     let stack = emptyStack()
                .push(3)
                .push(1)
                .push(4)
                .push(2)
                .push(5);

    test('stack.isEmpty() is false for non-empty stack', () => { 
        expect(stack.isEmpty()).toBe(false);
    });

    test('stack.top() is 2', () => {
        stack.pop();
        expect(stack.top()).toBe(2);
    });
  });