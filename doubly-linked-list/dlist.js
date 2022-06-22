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
                name: 'EmptyDListError',
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
                name: 'EmptyDListError',
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
                name: 'EmptyDListError',
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
                name: 'EmptyDListError',
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

function emptyDList () {
    return getDList();
}

module.exports = {
    emptyDList,
};