function getQT () {
    let children;
    let label = null;

    if (arguments.length === 4) {
        let lu, ru, rl, ll;
        if (typeof arguments[0] === 'object') {
            lu = arguments[0];
        } else {
            lu = getQT(arguments[0]);
        }

        if (typeof arguments[1] === 'object') {
            ru = arguments[1];
        } else {
            ru = getQT(arguments[1]);
        }

        if (typeof arguments[2] === 'object') {
            rl = arguments[2];
        } else {
            rl = getQT(arguments[2]);
        }

        if (typeof arguments[3] === 'object') {
            ll = arguments[3];
        } else {
            ll = getQT(arguments[3]);
        }

        children = {
            lu: lu,
            ru: ru,
            rl: rl,
            ll: ll
        };
    } else if (arguments.length === 1 && typeof arguments[0] === 'object') {
        return arguments[0];
    } else {
        label = arguments[0];
    }

    function isValue() {
        return label !== null;
    }

    function value () {
        let err = {
            name: 'NotValueError',
            message: 'Can not access value of a qtree with children'
        }

        if (!isValue()) {
            throw err;
        }

        return label;
    }

    function lu () {

        if (isValue()) {
            return this;
        }
        return getQT(children.lu);
    }

    function ru () {

        if (isValue()) {
            return this;
        }
        return getQT(children.ru);
    }

    function rl () {

        if (isValue()) {
            return this;
        }
        return getQT(children.rl);
    }

    function ll () {

        if (isValue()) {
            return this;
        }
        return getQT(children.ll);
    }

    return {
        isValue,
        value,
        lu,
        ru,
        rl,
        ll
    };
}

function baseQT (value) {
    return getQT(value);
}

function makeQT(luqt, ruqt, rlqt, llqt) {
    return getQT(luqt, ruqt, rlqt, llqt);
}

function rotate180(qtree) {
    if (qtree.isValue()) {
        return qtree
    }

    return makeQT(rotate180(qtree.rl()),
                    rotate180(qtree.ll()),
                    rotate180(qtree.lu()),
                    rotate180(qtree.ru())
                    );
}

module.exports = {
    baseQT,
    makeQT,
    rotate180
};