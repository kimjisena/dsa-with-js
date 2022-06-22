function linear(a, x) {
    
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] === x) {
            return i;
        }
    }
    return -1;
}

module.exports = {
    linear,
};