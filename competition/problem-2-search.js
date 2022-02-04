/** **Problem 2**: Implement a search algorithm on a sorted array of integers
 * 
 * > **Constraints:** 
 * > - `1 <= arr.length <= 10_000_000;`
 * > - All values in `arr` can be safely represented by Number: \
 * >   `arr.all(Number.isInteger) === true;` \
 * >   `arr.all(Number.isSafeInteger) === true;`
 * 
 * > **Restrictions:**
 * > - Foreign libraries and files are disallowed.
 * > - Using `Array.prototype` methods is disallowed.
 * @param arr {number[]} Array to be searched through
 * @param target {number} Value to be found in `arr`
 * @returns {number} Index of `target` in an array, or -1 if no `target` found
 */
function search(arr, target) {
    let l = -1;
    let r = arr.length;
    while (l < r) {
        const middle = Math.round((l + r) / 2);
        if (middle >= arr.length || middle < 0) return -1;
        if (arr[middle] > target) {
            r = middle - 1;
        } else if (arr[middle] < target) {
            l = middle;
        } else /* arr[middle] === target */ {
            return middle;
        }
    }
    return -1;
}
