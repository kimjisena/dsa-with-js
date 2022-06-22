## Binary Search Trees

A binary search tree is a variant of a binary tree which allows efficient 
searching of a particular item given it's key

A typical application of a binary search tree is in sorting a collection whose 
items are comparable.

**formal definition**

A binary search tree is a binary tree that is either empty or satisfies 
the following condtions:
1. all values occurring in the `left` subtree are smaller than that of 
the `root`
2. all values occurring in the `right` are larger than that of the root
3. the `left` and `right` subtrees are themselves binary search trees

A binary search tree inherits operations from binary tree

**binary search tree constructors**

1. `emptyTree()` - returns the `EmptyTree`
2. `makeTree(v, l, r)` - builds a `bstree` from a `root` with 
label `v` and two subtrees, `l` and `r`

**binary search tree condition**

 - `bstree.isEmpty()` - retuns false if `bstree` is non-empty

**binary search tree selectors**

1. `bstree.root()` - returns the value of `root`
2. `bstree.left()` - returns the `left subtree` or `EmptyTree`
3. `bstree.right()` - returns the `right subtree` or `EmptyTree`

**binary search tree mutator**

`insert(v, bstree)` - inserts a value `v` to the `bstree` as follows:
1. if `bstree.isEmpty() == true`, assign new value `v` to root node
2. if `bstree.isEmpty() == false`:
* - if `v` < `bstree.root()` then `insert(v, bstree.left())`
* - if `v` > `bstree.root()` then `insert(v, bstree.right())`
* - if `v` == `bstree.root()` then `ViolatedAssumptionError`

Note that `insert(v, bstree)` assumes `v != bstree.root()` in this 
implementation i.e duplicates are not allowed

**search, insert time complexity:** `O(log n)`