## Quad Trees

In a quad tree, each `leaf node` is labelled with a value and each `non-leaf node` 
has exactly four children

A quad tree is typically used to partition a 2D space by recursively dividing it into
four quadrants e.g: to represent `bitmaps` and `svgs`

**formally definition**

A quad tree is either
1. a `root node` with a value, or
2. a `root node` without a value, and with `four` quad tree children: `lu`, `ll`, `ru` and `rl`

Rule 1 is the `base case` (we can't have an empty quad tree).

**quad-tree condition**

- `qtree.isValue()` - returns `true` if qtree consists of a single node i.e `base case`

**quad-tree constructors**

1. `baseQT(value)` - returns a single-node qtree with label `value`
2. `makeQT(lu, ru, rl, ll)` - builds a qtree from four constituent qtrees

**quad-tree selectors**

1. `qtree.lu()` - returns the `left-upper` qtree
2. `qtree.ru()` - returns the `right-upper` qtree
3. `qtree.rl()` - returns the `right-lower` qtree
4. `qtree.ll()` - returns the `left-lower` qtree
5. `qtree.value()` - returns the label of a qtree is `qtree.isValue()` is `true`