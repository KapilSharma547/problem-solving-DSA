// Provide match First Dublicated Here
// Approach - 1: Brute force
let arr = [1, 2, 1, 3, 4, 2, 5];

function findDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
        break;
      }
    }
  }
  return duplicates;
}
console.log(findDuplicates(arr));

// Approach - 2: Object

function Duplicates(arr) {
  let obj = {};
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (obj[currentElement] == undefined) {
      obj[currentElement] = 1;
    } else {
      obj[currentElement]++;
    }
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      duplicates.push(key);
    }
  }

  if (duplicates.length > 1) {
    return duplicates;
  } else {
    return null;
  }
}

console.log(Duplicates([9, 2, 3, 4, 2, 5, 6, 7, 8, 6]));

// Approach - 3 (shortcut)

function findDuplicates(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      console.log(key);
    }
  }
}
findDuplicates([1, 9, 3, 4, 8, 5, 6, 9]);

// Approach - 4 (when more than one duplicates available but need to print only first duplicate)

// let arr = [1,2,3,4,2,5,6]

function findDuplicates(arr) {
  let result = [];
  let obj = {};
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key]; // max = -1, 1, 1,
      result.push(key);
    }
  }

  // console.log(max, result, obj);
  console.log(result[result.length - 1]);
}
findDuplicates([1, 9, 3, 4, 8, 5, 6, 9, 4]);







