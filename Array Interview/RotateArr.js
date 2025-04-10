// ✅ Question: Rotate Array by K Steps
// Problem Statement:

// Given an array nums, rotate the array to the right by k steps, where k is a non - negative integer.

// 🔁 Rotation means: Each element is shifted to the right by k positions.The elements that fall off the end wrap around to the beginning.

// Rotate array by k
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;

// function rotateArray(nums, k) {
//   let size = nums.length;
//   if (k > size) {
//     k = k % size; // 10 % 7 = 3
//   }
//   const rotated = nums.splice(size - k, size);
//   nums.unshift(...rotated)
//   console.log(rotated);
//   return nums
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

function rotateArray(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  const rotated = nums.splice(size - k, size);
  console.log(nums);
  nums.unshift(...rotated);
  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
