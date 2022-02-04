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
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] == target) {
             return i;
         }
     }
     return -1;
}
