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
    let list = [],
        first = -1;

    function isEmpty () {
        return first < 0;
    }

    function makeList (element) {
        let next;

        if (element.list !== undefined &&
            element.first !== undefined) {

            list = element.list;
            first = element.first;
            return this;
            }

        element = {
            value: element,
            next: null
        };

        if (isEmpty()) {
            list[0] = element;
            first++;
        } else {
            list[first].next = first + 1;
            first++;
            list[first] = element;
        }

        next = {
            list,
            first
        };

        return getList().makeList(next);
    }

    function top () {
        if (isEmpty()) {
            throw {
                name: 'ListEmptyError',
                message: 'Can not access elements of an empty list'
            };
        }
        return list[first].value;
    }

    function rest () {
        let rest;

        if (isEmpty()) {
            throw {
                name: 'ListEmptyError',
                message: 'Can not access elements of an empty list'
            };
        }

        try {
            list[first - 1].next = null;
        } catch(e) {
            null;
        }

        rest = {
            list,
            first: first - 1
        };

        return getList().makeList(rest);
    }

    function replaceTop (element) {
        list[first] = {
            value: element,
            next: null
        }

        return this;
    }

    function replaceRest (...rest) {
        let front = top(), 
            rear = getList();

        for (let i = rest.length - 1; i >= 0; i--) {
            rear.makeList(rest[i]);
        }

        rear.makeList(front);
        return rear;
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

let list = emptyList();

try {
    list.rest();
} catch(e) {
    console.log(e.name); // ListEmptyError
}

console.log(list.isEmpty()); // true

list = list.makeList(5)
            .makeList(2)
            .makeList(4)
            .makeList(1)
            .makeList(3);

console.log(list.top()); // 3

let rest = list.rest();
console.log(rest.isEmpty()); // false
console.log(rest.top()); // 1

let replaced = list.replaceTop(9);
console.log(replaced.top()); // 9

let replaced1 = replaced.replaceRest(6, 2, 3, 4);
console.log(replaced1.top()); // 9
console.log(replaced1.rest().top()); // 6

console.log(last(replaced1)); // 4

let appended = append(list, rest);
console.log(appended.top()); // 5