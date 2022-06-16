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
    let dlist = [];

    function isEmpty () {
        return dlist.length === 0;
    }

    function makeListLeft (element) {
        element = {
            prev: null,
            value: element,
            next: 1
        };

        dlist = [element].concat(
            dlist.map((e, i, a) => {
                let ele;
                if (i === a.length - 1) {
                    ele = {
                        prev: i,
                        value: e.value,
                        next: null
                    };
                } else {
                    ele = {
                        prev: e.next - 1,
                        value: e.value,
                        next: e.next + 1
                    };
                }
            return ele;
        }));

        return this;
    }

    function makeListRight (element) {
        let ele;

        if (isEmpty()) {
            ele = {
                prev: null,
                value: element,
                next: 1
            };
            dlist.push(ele);
        } else {
            ele = {
                prev: dlist.length - 1,
                value: element,
                next: null
            };

            dlist[dlist.length - 1].next = dlist.length;
            dlist.push(ele);
        }

        return this;
    }

    function firstLeft () {
        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty dlist'
            };
        }

        return dlist[0].value;
    }

    function restLeft () {
        let rest;

        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty dlist'
            };
        }

        rest = getDList();

        dlist.filter((_, i) => i !== 0)
            .forEach((e, i, a) => {
                rest.makeListRight(e.value);
            });

        return rest;

    }

    function firstRight () {
        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty dlist'
            };
        }
        return dlist[dlist.length - 1].value;
    }

    function restRight () {
        let rest;

        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty dlist'
            };
        }

        rest = getDList();

        dlist.filter((_, i, a) => i < a.length - 1)
            .forEach((e) => {
                rest.makeListRight(e.value);
            });

        return rest;
    }

    return {
        isEmpty,
        makeListLeft,
        makeListRight,
        firstLeft,
        restLeft,
        firstRight,
        restRight
    }
}

export function emptyDList () {
    return getDList();
}