/**
 * doubly linked lists
 * 
 * a doubly linked list can be used to when working with a list of web pages
 * where each page has content, a pointer to the next page and a pointer 
 * to the previous page
 * 
 * doubly linked list constructors
 * 1. `emptyDList()` - returns an empty doubly linked list
 * 2. `dlist.makeListLeft(element)` - return a new dlist with element added to the left
 * 3. `dlist.makeListRight(element)` - return a new dlist with element added to the right
 * 
 * doubly linked list selectors
 * 1. `dlist.firstLeft()` - return the leftmost element
 * 2. `dlist.restLeft()` - return a new dlist with all elements except the leftmost
 * 3. `dlist.firstRight()` - return the rightmost element
 * 4. `dlist.restRight()` - return a new dlist with all elements except the rightmost
 * 
 * doubly linked list condition
 * - `dlist.isEmpty()` - returns false if dlist is non-empty
 */

function getDList () {

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
            prev: null,
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

        return getDList().makeListLeft(listLeft);
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
            next: null
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

        return getDList().makeListRight(listRight);

    }

    function firstLeft () {
        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty dlist'
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
                message: 'Can not access elements of an empty dlist'
            };
        }
        next = list[left].next;
        list[next].prev = null;

        rest = {
            list,
            left: next,
            right
        };

        return getDList().makeListLeft(rest);
    }

    function firstRight () {

        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty dlist'
            };
        }

        return list[right].value;
    }

    function restRight () {
        let rest,
        prev;

        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty dlist'
            };
        }
        prev = list[right].prev;
        list[prev].next = null;

        rest = {
            list,
            left,
            right: prev
        };

        return getDList().makeListRight(rest);
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

export function emptyDList () {
    return getDList();
}