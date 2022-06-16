import { emptyTree, makeBT, size } from "./btree";

// testing binary tree functionality
let tree1 = emptyTree();
console.log(tree1.isEmpty()); // true

let tree2 = makeBT(11);
console.log(tree2.isEmpty()); // false
console.log(tree2.root()); // 11

let l = emptyTree();
let r = emptyTree();
let lr = makeBT(8, l, r);

console.log(lr.isEmpty()); // false
console.log(lr.root()); // 8
console.log(lr.left().isEmpty()); // true
console.log(lr.right().isEmpty()); // true

// create a nested tree
let tree3 = makeBT(
    8,
    makeBT(
        3,
        makeBT(1),
        makeBT(
            6,
            emptyTree(),
            makeBT(7))
    ),
    makeBT(
        11,
        makeBT(
            9,
            emptyTree(),
            makeBT(10)
        ),
        makeBT(
            14,
            makeBT(12),
            makeBT(15)
        )
    )
);

console.log(tree3.isEmpty()); // false
console.log(tree3.root()); // 8
console.log(tree3.left().root()); // 3
console.log(tree3.right().root()); // 11
console.log(tree3.left().left().left().isEmpty()); // true

let s = size(tree3);
console.log(s); // 11