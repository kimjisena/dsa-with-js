## Two-Three Trees

A 2-3 tree is a self-balancing binary search tree in which each node has 
either two or three subtrees (children). Unlike a regular binary search tree, 
a 2-3 tree allows storage of up to 2 items (search keys) per node.

**properties**

1. a `node` can have at most `3 child`ren and `2` search keys
2. all internal `node`s (all `node`s except `root` and `leaf node`s) must have 
at least `2 child`ren
3. all `leaf node`s are on the same level (bottommost) and do not carry information

Upon insertion or deletion, `splitting` and `joining` of `node`s has to be performed 
in order to restore the tree to the above properties. This is more efficient than 
rebalancing the whole tree as is the case with regular binary search tree.

Search, insertion and deletion operations in a 2-3 tree have a time complexity 
of `O(log n)`