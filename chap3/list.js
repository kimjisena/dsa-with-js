/**
 * linked lists
 * 
 * a linked list is an ordered list of elements in which each has a reference
 * to the next element in the list or to the empty list
 * 
 * linked list constructors
 * 1. `emptyList()` - returns the empty list
 * 2. `list.makeList(element)` - puts element at the rear of the list
 * 
 * linked list condition
 * - `list.isEmpty()` - returns false if list is non-empty
 * 
 * linked list accessors
 * 1. `list.top()` - returns the element at the top of the list
 * 2. `list.rest()` - returns the rest of the list without the top element
 * 
 * linked list mutators
 * 1. `list.replaceTop(element)` - replaces the top element with `element`
 * 2. `list.replaceRest(rest)` - replaces the rest of the list with `rest`
 */

 function getList () {
    let list = {};

    function isEmpty () {
        return list.value === undefined;
    }

    function makeList (element) {
        if (isEmpty()) {
            list.value = element;
            list.next = null;
        } else {
            let next = list;
            while(true) {
                if (next.next === null) {
                    break;
                }
                next = next.next;
            }

            next.next = {
                value: element,
                next: null
            };
        }

        return this;
    }

    function top () {
        if (isEmpty()) {
            throw {
                name: 'ListEmptyError',
                message: 'Can not access elements of an empty list'
            };
        }
        return list.value;
    }

    function rest () {
        let rest, next;

        if (isEmpty()) {
            throw {
                name: 'ListEmptyError',
                message: 'Can not access elements of an empty list'
            };
        }

        rest = getList();
        next = list.next;
        while (true) {
            if (next === null) {
                break;
            }

            rest.makeList(next.value);

            if (next.next === null) {
                break;
            }
            next = next.next;
        }

        return rest;
    }

    function replaceTop (element) {
        let tail, 
            list = getList();

        tail = rest();
        list.makeList(element);
        while (true) {
            list.makeList(tail.top());
            tail = tail.rest();
            if (tail.isEmpty()) {
                return list;
            }
        }
    }

    function replaceRest (...rest) {
        let head, list = getList();

        head = top();
        list.makeList(head);
        for (let ele of rest) {
            list.makeList(ele);
        }
        return list;
    }

    return {
        isEmpty,
        makeList,
        top,
        rest,
        replaceTop,
        replaceRest
    };
}

// the empty list
export function emptyList () {
    return getList();
}

// return the last element in a list
export function last (list) {

    if (list.isEmpty()) {

        throw {
            name: 'ListEmptyError',
            message: 'Can not access elements of an empty list'
        };

    } else if(list.rest().isEmpty()) {

        return list.top();

    } else {

        return last(list.rest());
    }
}

// append list_1 to list_2
export function append (list_1, list_2) {
    if (list_1.isEmpty()) {
        return list_2;
    } else {
        return append(list_1.rest(), list_2).makeList(list_1.top());
    }
}