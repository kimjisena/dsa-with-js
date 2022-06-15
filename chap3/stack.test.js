import { emptyStack } from './stack';

// testing stack functionality

let stack = emptyStack()
    .push(3)
    .push(1)
    .push(4)
    .push(2)
    .push(5);

console.log(stack.top()); // 5

stack = stack.pop();

console.log(stack.top()); // 2