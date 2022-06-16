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

// append list_2 to list_1
export function append (list_1, list_2) {
    if (list_1.isEmpty()) {
        return list_2;
    } else {
        return append(list_1.rest(), list_2).makeList(list_1.top());
    }
}

// testing linked list functionality

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

console.log(list.top()); // 5

let rest = list.rest();
console.log(rest.isEmpty()); // false
console.log(rest.top()); // 2

let list2 = emptyList().makeList(1);
let rest2 = list2.rest();

try {
    list2.rest().top();
} catch(e) {
    console.log(e.name); // ListEmptyError
}

let replaced = list.replaceTop(9);
console.log(replaced.top()); // 9

let replaced1 = replaced.replaceRest(6, 2, 3, 4);
console.log(replaced1.top()); // 9
console.log(replaced1.rest().top()); // 6

console.log(last(replaced1)); // 4

//let appended = append(list, rest);
//console.log(appended.top());