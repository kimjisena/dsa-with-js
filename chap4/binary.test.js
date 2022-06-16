import { binary } from "./binary";

// testing binary search
let a = [1, 3, 4, 4, 6, 17, 79, 81, 90];

console.log(binary(a, 79)); // 6
console.log(binary(a, 4)); // 2
console.log(binary(a, 98)); // -1