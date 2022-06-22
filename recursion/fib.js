function recur_fib (n) {

    n = (function helper (n) {
        if (n === 0 || n === 1) {
            return n;
        }
        return helper(n - 1) + helper(n - 2);
    })(n);

    return n;
}

function memo_recur_fib (n) {
    let cache = [];

    n = (function helper (n) {
        if (n === 0 || n === 1) {
            return n;
        }

        cache[n - 1] = helper(n - 1);
        if (cache[n - 2] === undefined) {
            cache[n - 2] = helper(n - 2);
        }
        return cache[n - 1] + cache[n - 2];
    })(n);

    return n;
}

function iter_fib (n) {
    let a = 0,
        b = 1,
        c,
        i = 2;

    if (n === 0 || n === 1) {
        return n;
    }
    while (i <= n) {
        c = a + b;
        a = b;
        b = c;
        i++;
    }
    return c;
}

function test_fib () {
    let n = 15, O_2n ;
    console.log('===RESULTS===');
    while (n <= 30) {
        O_2n = Math.pow(2, n);

        console.log('n = %d\t O(n) : %d\t O(2^n) : %d', n, n, O_2n);

        console.time('iter_fib(n)');
        iter_fib(n);
        console.timeEnd('iter_fib(n)');
    
        console.time('memo_recur_fib(n)');
        memo_recur_fib(n);
        console.timeEnd('memo_recur_fib(n)');
    
        console.time('recur_fib(n)');
        recur_fib(n);
        console.timeEnd('recur_fib(n)');
        
        console.log('');
        n++;
    }
}

// test results: ./fib.log.txt
test_fib();