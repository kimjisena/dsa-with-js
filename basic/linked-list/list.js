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
                name: 'EmptyListError',
                message: 'Can not access elements of an empty list'
            };
        }
        return list[first].value;
    }

    function rest () {
        let rest;

        if (isEmpty()) {
            throw {
                name: 'EmptyListError',
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

function emptyList () {
    return getList();
}

// return the last element in a list
function last (list) {

    if (list.isEmpty()) {

        throw {
            name: 'EmptyListError',
            message: 'Can not access elements of an empty list'
        };

    } else if(list.rest().isEmpty()) {

        return list.top();

    } else {

        return last(list.rest());
    }
}

// append list_1 to list_2
function append (list_1, list_2) {
    if (list_1.isEmpty()) {
        return list_2;
    } else {
        return append(list_1.rest(), list_2).makeList(list_1.top());
    }
}

module.exports = {
    emptyList,
    last,
    append
};