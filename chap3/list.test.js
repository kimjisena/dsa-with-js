import { emptyList, last, append } from "./list";

// testing linked list functionality

let list = emptyList();

console.log(list.isEmpty()); // true

try {
    list.top();
} catch(e) {
    console.log(e.name); // ListEmptyError
    console.log(e.message); // Can not access elements of an empty list
}

list = list.makeList(5)
            .makeList(2)
            .makeList(4)
            .makeList(1)
            .makeList(3);

console.log(list.top()); // 3
console.log(list.rest()); // list obj: [ 5, 2, 4, 1 ]

list = list.replaceTop(9);
console.log(list.top()); // 9

list = list.replaceRest([4, 3, 2, 6]);
console.log(list.rest()); // list obj: [ 4, 3, 2, 6 ]


let rest = list.rest();

console.log(last(list)); // 5

console.log(append(list, rest).top()); // 1