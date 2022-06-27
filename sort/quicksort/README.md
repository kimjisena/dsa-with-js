## Quicksort

The general idea is to split the array in such a way that all the items 
in the first subarray are smaller than all the items in the second subarray, 
and then concatenate all the subarrays to give the sorted full array.

Given an `array` of size `n`:
- Select one element from the array, `pivot`
- Determine the final position of `pivot` in the array, say `array[i]`
- Rearrange all the other elements of the array such that `array[0]`, ..., `array[i - 1]` 
are <= `array[i]`, and all elements `array[i + 1]`, ..., `array[n - 1]` >= `array[i]`
- Recursively apply the algorithm on the two subarrays until all elements are sorted

**time complexity**
- Average case: `O(nlogn)`
- Worst case (the dataset is already sorted): `O(n^2)`

**improvements**
- Using iteration instead of recursion as in `quickSort2()`
- Using `insertionSort()` when subarrays become smaller than `m <<< n`
- Using _the median of three_ to determine the `pivot`