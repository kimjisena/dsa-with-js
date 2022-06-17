/**
 * recursive fib vs iterative fib
 * 
 * recursive fib has a time complexity of `O(2^n)` due to the fact that
 * the algorithm gets called twice more than it was called in the previous
 * recursion
 * 
 * the number of recursive calls is the geometric series: 
 * 
 * `1 + 2 + 4 + ... + 2^n` = `2^n - 1` => `O(2^n)`
 * 
 * the second branch of the recursion i.e `recur_fib(n - 2)` recalculates values
 * already calculated by `recur_fib(n - 1)` hence the performance penalty.
 * 
 * we can improve the performance of recursive fib by:
 * 1. memoizing i.e using `memo_recur_fib(n)`
 * 2. using an iterative algorithm with `O(n)` i.e using `iter_fib(n)`
 * 
 */

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
    let cache = [1, 1],
        i = 2;

    if (n === 0 || n === 1) {
        return n;
    }

    while (i < n) {
        cache[i] = cache[i - 1] + cache[i - 2];
        i++;
    }
    return cache[cache.length - 1];
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