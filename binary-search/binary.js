function binary(a, x) {
    let left = 0,
        right = a.length - 1,
        mid;
        while (left < right) {
            mid = Math.floor((left + right)/2);
            if (x > a[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return a[left] === x ? left : -1;
}

module.exports = {
    binary,
};