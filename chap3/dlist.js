/**
 * doubly linked lists
 * 
 * a doubly linked list can be used to when working with a list of web pages
 * where each page has content, a pointer to the next page and a pointer 
 * to the previous page
 * 
 * doubly linked list constructors
 * 1. emptyDList() - returns an empty doubly linked list
 * 2. dlist.makeListLeft(element) - return a new dlist with element added to the left
 * 3. dlist.makeListRight(element) - return a new dlist with element added to the right
 * 
 * doubly linked list selectors
 * 1. dlist.firstLeft() - return the leftmost element
 * 2. dlist.restLeft() - return a new dlist with all elements except the leftmost
 * 3. dlist.firstRight() - return the rightmost element
 * 4. dlist.restRight() - return a new dlist with all elements except the rightmost
 * 
 * doubly linked list condition
 * 1. dlist.isEmpty() - returns false if dlist is non-empty
 */

function getDList () {
    let dlist = [];

    function isEmpty () {
        return dlist.length === 0;
    }

    function makeListLeft (element) {
        let v = element.value || element;
        element = {
            prev: null,
            value: v,
            next: 1
        }

        dlist = [element].concat(
            dlist.map(e => {
            return {
                prev: e.next - 1,
                value: e.value,
                next: e.next + 1
            }
        }));

        return this;
    }

    function makeListRight (element) {
        let v = element.value || element, ele;

        if (isEmpty() && v) {
            dlist.push(element);
        } else if (v) {
            dlist.push(element);
        } else {
            ele = {
                prev: dlist.length - 1,
                value: element,
                next: null
            }
            dlist[dlist.length - 1].next = length;
            dlist.push(ele);
        }

        return this;
    }

    function firstLeft () {
        return dlist[0];
    }

    function restLeft () {
        let rest = getDList();
        dlist.filter((_, i, a) => i !== 0)
            .forEach((e, i, a) => {
                if (i === 0) {
                    e = {
                        prev: null,
                        value: e.value,
                        next: i + 1
                    };
                } else {
                    e = {
                        prev: i - 1,
                        value: e.value,
                        next: i + i
                    };
                }

                rest.makeListRight(e);
            });

        return rest;

    }

    function firstRight () {
        return dlist[dlist.length - 1];
    }

    function restRight () {
        let rest = getDList();

        dlist.filter((_, i, a) => i < a.length - 1)
            .forEach((e, i, a) => {
                if (i === a.length - 1) {
                    e.next = null;
                }
                rest.makeListRight(e);
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

// testing doubly linked list functionality

let dlist = emptyDList();

console.log(dlist.isEmpty()); // true

dlist = dlist.makeListLeft(5)
        .makeListLeft(2)
        .makeListLeft(4)
        .makeListLeft(1)
        .makeListLeft(3);

console.log(dlist.isEmpty()); // false
console.log(dlist.firstLeft()); // 3
console.log(dlist.firstRight()); // 5

let dleft = dlist.restLeft();

console.log(dleft.isEmpty()); // false
console.log(dleft.firstLeft()); // 1
console.log(dleft.firstRight()); // 5

let dright = dlist.restRight();

console.log(dright.isEmpty()); // false
console.log(dright.firstLeft()); // 3
console.log(dright.firstRight()); // 2
