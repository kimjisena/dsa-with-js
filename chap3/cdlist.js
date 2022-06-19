/**
 * circular doubly linked lists
 * 
 * this is an extension of doubly linked list
 * it is useful when we might need to move efficiently through a whole
 * list of items without starting at a particular endpoint
 * 
 * same operations as a doubly linked list except
 * 
 * - `first.prev` = `last`
 * - `last.next` = `first`
 */

 function getCDList () {

    let list = [],
        left, right;

    function isEmpty () {
        return !(list.length);
    }

    function makeListLeft (element) {

        let listLeft;

        if ((element.list !== undefined) && 
            (element.right !== undefined) && 
            (element.left !== undefined)) {

            list = element.list;
            right = element.right;
            left = element.left;

            return this;
        }

        element = {
            prev: right,
            value: element,
            next: null
        }

        if (isEmpty()) {
            left = right = 0;
            list.push(element);

        } else {
            element.next = left;
            list.push(element);
            list[left].prev = list.length - 1;
            left = list.length - 1;
        }

        listLeft = {
            list,
            right,
            left
        };

        return getCDList().makeListLeft(listLeft);
    }

    function makeListRight (element) {

        let listRight;

        if ((element.list !== undefined) && 
            (element.right !== undefined) && 
            (element.left !== undefined)) {

            list = element.list;
            right = element.right;
            left = element.left;

            return this;
            }

        element = {
            prev: null,
            value: element,
            next: left
        }

        if (isEmpty()) {
            left = right = 0;
            list.push(element);
        } else {
            element.prev = right;
            list.push(element);
            list[right].next = list.length - 1;
            right = list.length - 1;
        }

        listRight = {
            list,
            right,
            left
        };

        return getCDList().makeListRight(listRight);

    }

    function firstLeft () {
        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        } 

        return list[left].value;
    }

    function restLeft () {
        let rest,
            next;

        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        }
        next = list[left].next;
        list[next].prev = null;

        rest = {
            list,
            left: next,
            right
        };

        return getCDList().makeListLeft(rest);
    }

    function firstRight () {

        if (isEmpty()) {
            throw {
                name: 'CDListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        }

        return list[right].value;
    }

    function restRight () {
        let rest,
        prev;

        if (isEmpty()) {
            throw {
                name: 'CDListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        }
        prev = list[right].prev;
        list[prev].next = null;

        rest = {
            list,
            left,
            right: prev
        };

        return getCDList().makeListRight(rest);
    }

    return {
        isEmpty,
        makeListLeft,
        makeListRight,
        firstLeft,
        firstRight,
        restLeft,
        restRight
    };
}

function emptyCDList () {
    return getCDList();
}

module.exports = {
    emptyCDList,
};