const {emptyStack} = require('./stack.js');

describe('stack: initial tests', () => { 
    let stack = emptyStack();

    test('should return true', () => { 
        expect(stack.isEmpty()).toBe(true);
    });

    test('should throw StackEmptyError', () => {
        expect(() => stack.top())
            .toThrow('Can not access elements of an empty stack')
    });
 });

 describe('stack: core operations', () => { 
     let stack = emptyStack()
                .push(3)
                .push(1)
                .push(4)
                .push(2)
                .push(5);

    test('should return false', () => { 
        expect(stack.isEmpty()).toBe(false);
    });

    test('should return 2', () => {
        expect(stack.pop().top()).toBe(2);
    });
  });