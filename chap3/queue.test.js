const {emptyQueue} = require('./queue.js');

describe('queue: initial tests', () => {
    let queue = emptyQueue();
    
    test('queue.isEmpty() is true for empty queue', () => {
        expect(queue.isEmpty()).toBe(true);
    });
});

describe('queue: core operations', () => {
    let queue = emptyQueue()
                .push(3)
                .push(1)
                .push(4)
                .push(2);

    test('queue.top() is 3', () => {
        expect(queue.top()).toBe(3);
    });

    test('queue.isEmpty() is true', () => {
        queue = queue
                .pop()
                .pop()
                .pop()
                .pop();

        expect(queue.isEmpty()).toBe(true);
    });
});