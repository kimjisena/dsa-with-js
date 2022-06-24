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