import { emptyQueue } from "./queue.js";

// testing queue functionality

let queue = emptyQueue();

console.log(queue.isEmpty()); // true

queue = queue
        .push(3)
        .push(1)
        .push(4)
        .push(2);

console.log(queue.top()); // 3

queue = queue
        .pop()
        .pop()
        .pop()
        .pop();

console.log(queue.isEmpty()); // true