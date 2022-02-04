/** **Problem 1**: Implement a sorting algorithm for integers
 * 
 * > **Constraints:**
 * > - `1 <= input.length <= 10_000_000;`
 * > - All values in `input` can be safely represented by `Number`: \
 * >   `input.all(Number.isInteger) === true;` \
 * >   `input.all(Number.isSafeInteger) === true;`
 * 
 * > **Restrictions:**
 * > - Foreign libraries and files are disallowed.
 * > - Using `Array.prototype.sort()` is disallowed.
 * @param input {number[]} Array to be sorted
 * @returns {number[]} Sorted array of numbers
 */

function sort(input) {
    function quicksort(array, begin, end) {
        if (end - begin < 2) return array;
        const pivot = Math.ceil((begin + end) / 2);
        let l = begin;
        let r = end;
        while (l < r) {
            while (array[l] < array[pivot]) l++;
            while (array[r] > array[pivot]) r--;
            if (l < r) {
                const t = array[l];
                array[l] = array[r];
                array[r] = t;
                l++;
                r--;
            }
        }
        quicksort(array, begin, pivot);
        quicksort(array, pivot, end);
        return array;
    }
    return quicksort(input, 0, input.length - 1);
}
