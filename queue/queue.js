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

function emptyQueue() {
    return getQueue();
}

module.exports = {
    emptyQueue,
};