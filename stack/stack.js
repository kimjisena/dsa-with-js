function getStack() {
    let stack = [];

    function isEmpty() {
        return stack.length === 0;
    }

    function push (element) {
        stack.push(element);
        return this;
    }

    function top () {
        if(isEmpty()) {
            throw {
                name: 'EmptyStackError',
                message: 'Can not access elements of an empty stack'
            };
        }
        return stack[stack.length - 1];
    }

    function pop () {
        if(isEmpty()) {
            throw {
                name: 'EmptyStackError',
                message: 'Can not access elements of an empty stack'
            };
        }
        stack.pop();
        return this;
    }

    return {
        isEmpty,
        push,
        top,
        pop
    }
}

function emptyStack() {
    return getStack();
}

module.exports = {
    emptyStack,
};