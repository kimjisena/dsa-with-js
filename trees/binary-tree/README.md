## Binary Trees

A binary tree is a tree data structure whose nodes contain at most two 
children and exactly one incoming edge (except for the root node).

**formal definition**

A binary tree is either:
1. the empty tree, or
2. it consists of a node and two btrees, `left` subtree and `right` subtree

**binary tree constructors**

1. `emptyTree()` - returns the `EmptyTree`
2. `makeTree(v, l, r)` - builds a btree from a `root` with label `v` and two subtrees, 
`l` and `r`

**binary tree condition**

- `btree.isEmpty()` - retuns `false` if btree is non-empty
 
**binary selectors**

1. `btree.root()` - returns the value (label) of the `root`
2. `btree.left()` - returns the `left` subtree or `EmptyTree`
3. `btree.right()` - returns the `right` subtree or `EmptyTree`