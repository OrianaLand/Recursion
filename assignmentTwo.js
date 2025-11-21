function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Please enter a valid array");
  }

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Add remaining elements (only one of these will have elements left)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([7, 1, 2, 0, 9])); // [ 0, 1, 2, 7, 9 ]
console.log(mergeSort([])); // []
console.log(mergeSort(["a"])); // ["a"]
console.log(mergeSort([0])); // [0]
console.log(mergeSort("string")); // "Please enter a valid array"
