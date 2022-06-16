import { emptyList, last, append } from "./list";


// testing linked list functionality

let list = emptyList();

try {
    list.rest();
} catch(e) {
    console.log(e.name); // ListEmptyError
}

console.log(list.isEmpty()); // true

list = list.makeList(5)
            .makeList(2)
            .makeList(4)
            .makeList(1)
            .makeList(3);

console.log(list.top()); // 5

let rest = list.rest();
console.log(rest.isEmpty()); // false
console.log(rest.top()); // 2

let list2 = emptyList().makeList(1);
let rest2 = list2.rest();

try {
    list2.rest().top();
} catch(e) {
    console.log(e.name); // ListEmptyError
}

let replaced = list.replaceTop(9);
console.log(replaced.top()); // 9

let replaced1 = replaced.replaceRest(6, 2, 3, 4);
console.log(replaced1.top()); // 9
console.log(replaced1.rest().top()); // 6

console.log(last(replaced1)); // 4

let appended = append(rest, list);
console.log(appended.top()); // 5