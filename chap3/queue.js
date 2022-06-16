/**
 * queues
 * 
 * a queue is a first-in, first-out datastructure where elements are added to
 * the added and removed from the front
 * 
 * it is convenient for scheduling jobs: for instance in an `event loop`
 * 
 * queue constructors
 * 1. `emptyQueue()` - returns an empty queue
 * 2. `queue.push(element)` - returns a queue with element added to the end
 * 
 * queue selectors
 * 1. `queue.top()` - returns the top (front) element of the queue
 * 2. `queue.pop()` - returns the queue without the top (front) element
 * 
 * queue condition
 * - `queue.isEmpty()` - returns false is queue is non-empty
 */

function getQueue() {
    let queue = [];

    function isEmpty () {
        return queue.length === 0;
    }

    function push (element) {
        queue.push(element);
        return this;
    }

    function top () {
        if (isEmpty()) {
            throw {
                name: 'EmptyQueueError',
                message: 'Can not access elements of an empty queue'
            };
        }

        return queue[0];
    }

    function pop () {

        if (isEmpty()) {
            throw {
                name: 'EmptyQueueError',
                message: 'Can not access elements of an empty queue'
            };
        }

        queue.shift();
        return this;
    }

    return {
        isEmpty,
        push,
        top,
        pop
    }
}

export function emptyQueue() {
    return getQueue();
}