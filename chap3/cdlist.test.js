import { emptyCDList } from "./cdlist";


// testing doubly linked list functionality

let dlist = emptyCDList();

console.log(dlist.isEmpty()); // true

dlist = dlist.makeListLeft(5)
        .makeListLeft(2)
        .makeListLeft(4)
        .makeListLeft(1)
        .makeListLeft(3);

console.log(dlist.isEmpty()); // false
console.log(dlist.firstLeft()); // 3
console.log(dlist.firstRight()); // 5

let dleft = dlist.restLeft();

console.log(dleft.isEmpty()); // false
console.log(dleft.firstLeft()); // 1
console.log(dleft.firstRight()); // 5

let dright = dlist.restRight();

console.log(dright.isEmpty()); // false
console.log(dright.firstLeft()); // 3
console.log(dright.firstRight()); // 2

// test with makeListRight()
let dlist2 = emptyCDList();

dlist2 = dlist2.makeListRight(3)
        .makeListRight(1)
        .makeListRight(4)
        .makeListRight(2)
        .makeListRight(5);

console.log(dlist2.isEmpty()); // false
console.log(dlist2.firstLeft()); // 3
console.log(dlist2.firstRight()); // 5