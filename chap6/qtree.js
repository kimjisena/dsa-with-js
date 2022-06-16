/**
 * quad-trees
 * 
 * in a quad tree, each leaf node is labelled by a value and each 
 * non-leaf node has exactly four children
 * 
 * it used to partition a 2D space by recursively dividing it into
 * four quadrants e.g: to represent `bitmaps` and `svgs`
 * 
 * formally, a quad tree is either
 * 1. a root node with a value, or
 * 2. a root node without a value, and with four quad tree children: `lu`, `ll`, `ru` and `rl`
 * 
 * rule 1 is the `base case` (we can't have an empty quad tree)
 * 
 * quad-tree condition
 * - `qtree.isValue()` - returns `true` if qtree consists of a single node i.e `base case`
 * 
 * quad-tree constructors
 * 1. `baseQT(value)` - returns a single-node qtree with label `value`
 * 2. `makeQT(lu, ru, rl, ll)` - builds a qtree from four constituent qtrees
 * 
 * quad-tree selectors
 * 1. `qtree.lu()` - returns the left-upper qtree
 * 2. `qtree.ru()` - returns the right-upper qtree
 * 3. `qtree.rl()` - returns the right-lower qtree
 * 4. `qtree.ll()` - returns the left-lower qtree
 * 5. `qtree.value()` - returns the label of a qtree is `qtree.isValue()` is `true`
 */

function getQT () {
    let children;
    let label = null;

    if (arguments.length === 4) {
        let lu, ru, rl, ll;
        if (typeof arguments[0] === 'object') {
            lu = arguments[0];
        } else {
            lu = getQT(arguments[0]);
        }

        if (typeof arguments[1] === 'object') {
            ru = arguments[1];
        } else {
            ru = getQT(arguments[1]);
        }

        if (typeof arguments[2] === 'object') {
            rl = arguments[2];
        } else {
            rl = getQT(arguments[2]);
        }

        if (typeof arguments[3] === 'object') {
            ll = arguments[3];
        } else {
            ll = getQT(arguments[3]);
        }

        children = {
            lu: lu,
            ru: ru,
            rl: rl,
            ll: ll
        };
    } else if (arguments.length === 1 && typeof arguments[0] === 'object') {
        return arguments[0];
    } else {
        label = arguments[0];
    }

    function isValue() {
        return label !== null;
    }

    function value () {
        let err = {
            name: 'NotValueError',
            message: 'Can not access value of a qtree with children'
        }

        if (!isValue()) {
            throw err;
        }

        return label;
    }

    function lu () {

        if (isValue()) {
            return this;
        }
        return getQT(children.lu);
    }

    function ru () {

        if (isValue()) {
            return this;
        }
        return getQT(children.ru);
    }

    function rl () {

        if (isValue()) {
            return this;
        }
        return getQT(children.rl);
    }

    function ll () {

        if (isValue()) {
            return this;
        }
        return getQT(children.ll);
    }

    return {
        isValue,
        value,
        lu,
        ru,
        rl,
        ll
    };
}

export function baseQT (value) {
    return getQT(value);
}

export function makeQT(luqt, ruqt, rlqt, llqt) {
    return getQT(luqt, ruqt, rlqt, llqt);
}