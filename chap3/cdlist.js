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
    let cdlist = [];

    function isEmpty () {
        return cdlist.length === 0;
    }

    function makeListLeft (element) {

        element = {
            prev: null,
            value: element,
            next: isEmpty() ? 0 : 1
        };

        cdlist = [element].concat(
            cdlist.map((e, i, a) => {
                let ele;
                if (i === a.length - 1) {
                    ele = {
                        prev: i,
                        value: e.value,
                        next: 0
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
        cdlist[0].prev = cdlist.length - 1;
        return this;
    }

    function makeListRight (element) {
        let ele;

        if (isEmpty()) {
            ele = {
                prev: 0,
                value: element,
                next: 0
            };
            cdlist.push(ele);
        } else {
            ele = {
                prev: cdlist.length - 1,
                value: element,
                next: 0
            };

            cdlist[cdlist.length - 1].next = cdlist.length;
            cdlist.push(ele);
        }

        return this;
    }

    function firstLeft () {
        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        }

        return cdlist[0].value;
    }

    function restLeft () {
        let rest;

        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        }

        rest = getCDList();

        cdlist.filter((_, i) => i !== 0)
            .forEach((e, i, a) => {
                rest.makeListRight(e.value);
            });

        return rest;

    }

    function firstRight () {
        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        }
        return cdlist[cdlist.length - 1].value;
    }

    function restRight () {
        let rest;

        if (isEmpty()) {
            throw {
                name: 'DListEmptyError',
                message: 'Can not access elements of an empty cdlist'
            };
        }

        rest = getCDList();

        cdlist.filter((_, i, a) => i < a.length - 1)
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

export function emptyCDList () {
    return getCDList();
}