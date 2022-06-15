/**
 * linked lists
 * 
 * a linked list is an ordered list of elements in which each has a reference
 * to the next element in the list or to the empty list
 * 
 * linked list constructors
 * 1. emptyList() - returns the empty list
 * 2. list.makeList(element) - puts element at the top of the list
 * 
 * linked list condition
 * list.isEmpty() - returns false if list is non-empty
 * 
 * linked list accessors
 * 1. list.top() - returns the element at the top of the list
 * 2. list.rest() - returns the rest of the list without the top element
 * 
 * linked list mutators
 * 1. list.replaceTop(element) - replaces the top element with `element`
 * 2. list.replaceRest(rest) - replaces the rest of the list with `rest`
 */

function getList () {
    let list = [];

    function makeList (element) {
        element = {
            value: element,
            next: null
        }
        if (!isEmpty()) {
            list[list.length - 1].next = list.length;
        }

        list.push(element);
        return this;
    }

    function isEmpty () {
        return list.length === 0 ? true : false;
    }

    function top () {
        if (isEmpty()) {
            throw {
                name: 'ListEmptyError',
                message: 'Can not access elements of an empty list'
            }
        }
        return list[list.length - 1].value;
    }

    function rest () {
        let rest;

        if (isEmpty()) {
            throw {
                name: 'ListEmptyError',
                message: 'Can not access elements of an empty list'
            }
        }

        rest = getList();
        
        list.slice(0, list.length - 1)
            .map(e => e.value).forEach(
                (e) => {
                    rest.makeList(e);
                }
            );

        return rest;
    }

    function replaceTop (element) {
        element = {
            value: element,
            next: null
        }

        list[list.length - 1] = element;
        return this;
    }

    function replaceRest (rest) {

        rest = rest.map(
            (e, i) => {
                return {
                    value: e,
                    next: i + 1
                };
            }
        );

        list.splice(0, list.length - 1, ...rest);
        return this;
    }

    return {
        makeList,
        isEmpty,
        top,
        rest,
        replaceTop,
        replaceRest
    }
}

export function emptyList () {
    return getList();
}

// return the last element in a list
function last(list) {

    if (list.isEmpty()) {

        throw {
            name: 'ListEmptyError',
            message: 'Can not access elements of an empty list'
        }

    } else if(list.rest().isEmpty()) {

        return list.top();

    } else {

        return last(list.rest());
    }
}

let list = emptyList();

list = list.makeList(5)
            .makeList(2)
            .makeList(4)
            .makeList(1)
            .makeList(3);

let rest = list.rest();

console.log(rest.top());

console.log(last(list));