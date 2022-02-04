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
    for (let i = 0; i < input.length; i++) {
        let minindex = i;
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[minindex]) {
                minindex = j;
            }
        }
        const t = input[minindex];
        input[minindex] = input[i];
        input[i] = t;
    }
    return input;
}
