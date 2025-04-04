// Recursive Approach (Custom Function)
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // Recursively flatten
    } else {
      result.push(item);
    }
  }

  return result;
}

// 2
const nestedArray1 = [1, [2, [3, 4]], 5, [6]];
console.log("Recursive →", flattenArray(nestedArray1));
// Output: [1, 2, 3, 4, 5, 6]


// 2. Built-in .flat() Method (ES2019+)
const nestedArray2 = [1, [2, [3, 4]], 5, [6]];
console.log("flat(2) →", nestedArray2.flat(2));         // Flattens 2 levels
console.log("flat(Infinity) →", nestedArray2.flat(Infinity)); // Flattens all levels


// 3rd Approch
function flattenIterative(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next); // Push items back into the stack
    } else {
      result.unshift(next); // Insert at start to maintain order
    }
  }

  return result;
}

console.log("Iterative →", flattenIterative([1, [2, [3, 4]], 5, [6]]));
// Output: [1, 2, 3, 4, 5, 6]


// Iterative Approach (using Stack)
function myArrayFlatten(arr) {
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      flattened = flattened.concat(myArrayFlatten(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}

const nestedArray3 = [1, [2, [3, 4]], 5, [6]];
console.log("Custom Renamed →", myArrayFlatten(nestedArray3));
// Output: [1, 2, 3, 4, 5, 6]
