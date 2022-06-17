import { emptyList, last, append } from "./list.js";


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

console.log(list.top()); // 3

let rest = list.rest();
console.log(rest.isEmpty()); // false
console.log(rest.top()); // 1

let replaced = list.replaceTop(9);
console.log(replaced.top()); // 9

let replaced1 = replaced.replaceRest(6, 2, 3, 4);
console.log(replaced1.top()); // 9
console.log(replaced1.rest().top()); // 6

console.log(last(replaced1)); // 4

let appended = append(list, rest);
console.log(appended.top()); // 5