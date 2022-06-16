import { linear } from "./linear";

// testing linear search
let a = [1, 4, 17, 3, 90, 79, 4, 6, 81];

console.log(linear(a, 17)); // 2
console.log(linear(a, 90)); // 4
console.log(linear(a, 73)); // -1