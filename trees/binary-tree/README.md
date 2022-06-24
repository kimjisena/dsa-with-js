## Binary Trees

A binary tree is a tree data structure whose nodes contain at most two 
children and exactly one incoming edge (except for the root node).

**trees - important terms**

- `tree` - a set of `node`s and `edge`s where there's at most one way to reach a node
- `node` - a data container in a tree
- `root` - the `node` at the top of the `tree`. It is said to be at `level 1`
- `parent` - the `node` that is the predecessor of the current `node`
- `child` - the `node` that is the successor of the current `node`
- `sibling`s - `node`s that have the same `parent`
- `leaf node` - a `node` that has no `child`ren a.k.a `terminal node`
- `non-leaf node` - a `node` with at least one `child` a.k.a `non-terminal node`
- `edge` - an ordered pair of `node`s
- `path` - a sequence of `edge`s
- `depth` - the number of `edge`s that connect any `node` to the `root`
- `size` - the total number of `node`s
- `height` - the `maximal path` from a `leaf node` to the `root node` i.e the deepest `depth`
- `pre-order traversal` - process the `root`, then `left` brach and `right` brach
- `in-order traversal` - process the `left` branch, then the `root`, and lastly the `right` branch
- `post-order traversal` - process the `left` branch, then the `right` branch, and lastly the `root`
- `depth first traversal` - process all `child`ren of a `node` before processing it's `sibling`
- `breadth first traversal` - process all `node`s at the same `level` before `node`s on the next `level`

An empty tree has `height = -1` and `size = 0`;

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