const {emptyQueue} = require('./queue.js');

describe('queue: initial tests', () => {
    let queue = emptyQueue();
    
    test('should return true', () => {
        expect(queue.isEmpty()).toBe(true);
    });
});

describe('queue: core operations', () => {
    let queue = emptyQueue()
                .push(3)
                .push(1)
                .push(4)
                .push(2);

    test('should return 3', () => {
        expect(queue.top()).toBe(3);
    });

    test('should return true', () => {
        queue = queue
                .pop()
                .pop()
                .pop()
                .pop();

        expect(queue.isEmpty()).toBe(true);
    });
});