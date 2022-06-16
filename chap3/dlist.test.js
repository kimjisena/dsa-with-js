import {emptyDList} from './dlist';


// testing doubly linked list functionality


let list = emptyDList();
console.log(list.isEmpty()); // true

 list = list.makeListLeft(5)
         .makeListLeft(2)
         .makeListLeft(4)
         .makeListLeft(1)
         .makeListLeft(3);

 console.log(list.isEmpty()); //false
 console.log(list.firstLeft()); // 3
 console.log(list.firstRight()); // 5

let left = list.restLeft();

console.log(left.isEmpty()); // false
console.log(left.firstLeft()); // 1
console.log(left.firstRight()); // 5

let right = list.restRight();

console.log(right.isEmpty()); // false
console.log(right.firstLeft()); // 3
console.log(right.firstRight()); // 2

// test with makeListRight()
 let list2 = emptyDList();
 console.log(list2.isEmpty()); // true

 list2 = list2.makeListRight(3)
         .makeListRight(1)
         .makeListRight(4)
         .makeListRight(2)
         .makeListRight(5);

 console.log(list2.isEmpty()); // false
 console.log(list2.firstLeft()); // 3
 console.log(list.firstRight()); // 5