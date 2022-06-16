import { baseQT, makeQT } from "./qtree";

// testing qtree functionality
let qtree1 = baseQT(0);
console.log(qtree1.isValue()); // true
console.log(qtree1.lu().value()); // 0
console.log(qtree1.ru().value()); // 0
console.log(qtree1.rl().value()); // 0
console.log(qtree1.ll().value()); // 0

let lu = baseQT(0);
let ru = baseQT(10);
let rl = baseQT(20);
let ll = baseQT(100);

let qtree2 = makeQT(lu, ru, rl, ll);
console.log(qtree2.isValue()); // false

console.log(qtree2.lu().isValue()); // true
console.log(qtree2.lu().value()); // 0

console.log(qtree2.ru().isValue()); // true
console.log(qtree2.ru().value()); // 10

console.log(qtree2.rl().isValue()); // true
console.log(qtree2.rl().value()); // 20

console.log(qtree2.ll().isValue()); // true
console.log(qtree2.ll().value()); // 100

let qtree3 = makeQT(110, 120, 90, 100);
console.log(qtree3.isValue()); // false

console.log(qtree3.lu().value()); // 110
console.log(qtree3.ru().value()); // 120
console.log(qtree3.rl().value()); // 90
console.log(qtree3.ll().value()); // 100

// build a nested qtree

let qtree4 = makeQT(
    0, 
    10, 
    20, 
    makeQT(
        50,
        makeQT(
            60,
            70,
            80,
            makeQT(
                110,
                120,
                90,
                100)),
        30,
        40));

console.log(qtree4.isValue()); // false
console.log(qtree4.lu().value()); // 0
console.log(qtree4.ru().value()); // 10
console.log(qtree4.rl().value()); // 20

console.log(qtree4.ll().isValue()); // false

// rotate a qtree +180 degrees: lu -> rl, ru -> ll, rl -> lu and ll -> ru
function rotate180(qtree) {
    if (qtree.isValue()) {
        return qtree
    }

    return makeQT(rotate180(qtree.rl()),
                    rotate180(qtree.ll()),
                    rotate180(qtree.lu()),
                    rotate180(qtree.ru())
                    );
}

let qtree5 = rotate180(qtree4);
console.log(qtree5.isValue()); // false
console.log(qtree5.lu().value()); // 20
console.log(qtree5.ru().isValue()); // false
console.log(qtree5.rl().value()); // 0
console.log(qtree5.ll().value()); // 10