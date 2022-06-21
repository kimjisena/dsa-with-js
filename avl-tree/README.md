# AVL Trees - Summary

An AVL tree (named after Adelson-Velsky and Landis - their inventors) is a self-balancing binary search tree in which the difference in height 
between the two subtrees of any node is in the range `[-1, 1]`.

This means every insertion/deletion operation disturbs the balance to `[-2, 2]` range 
and thus it needs to be restored by readjusting (rotating) the node's subtrees.

AVL tree rotations take constant time and involve at most `3` nodes, hence they do not affect other operations such as search, insertion, and deletion.

A node in an AVL tree has the same structure as a node in a regular binary search tree 
with the addition of a `balance` field which can either be -1, 0, or 1.

Insertion and deletion operations can happen while keeping the tree's height at the 
minimum `O(log n)`, eliminating the need to rebalance the whole tree.

Insertion, deletion and search operations have a time complexity of `O(log n)`.