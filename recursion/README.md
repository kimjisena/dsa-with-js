## Recursion

Simply put, a `definition` of a `term` is said to be `recursive` if it uses the `term` 
being defined. In computer science, a `problem` requires a `recursive solution` if it's 
made of smaller `subproblems` which are `instances` of the whole (got it??).

**recursive fib vs iterative fib**

Recursive fib has a time complexity of `O(2^n)` due to the fact that the algorithm 
gets called twice more than it was called in the previous recursion.

The number of recursive calls is the geometric series: 

`1 + 2 + 4 + ... + 2^n` = `2^n - 1` => `O(2^n)`

The second branch of the recursion i.e `recur_fib(n - 2)` recalculates values already 
calculated by `recur_fib(n - 1)` hence the performance penalty.

We can improve the performance of recursive fib by:
1. memoizing i.e using `memo_recur_fib(n)`
2. using an iterative algorithm with `O(n)` i.e using `iter_fib(n)`