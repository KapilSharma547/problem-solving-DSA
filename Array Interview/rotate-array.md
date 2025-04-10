### ✅ **Question: Rotate Array by K Steps**

**Problem Statement:**

Given an array `nums`, rotate the array to the right by `k` steps, where `k` is a non-negative integer.

🔁 Rotation means:
Each element is shifted to the right by `k` positions. The elements that fall off the end wrap around to the beginning.

---

### 🔍 **Example:**

```js
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3  
Output: [5, 6, 7, 1, 2, 3, 4]
```

**Explanation:**  
- Step 1: [7, 1, 2, 3, 4, 5, 6]  
- Step 2: [6, 7, 1, 2, 3, 4, 5]  
- Step 3: [5, 6, 7, 1, 2, 3, 4]

---

### ✅ **Constraints:**
- `1 <= nums.length <= 10⁵`
- `0 <= k <= 10⁹`

---

## 🧠 Solution Approaches:

---

### ✅ **1. Using `splice` and `unshift` (as in your code)**

```js
function rotateArray(nums, k) {
  let size = nums.length;
  k = k % size;

  const rotated = nums.splice(size - k, k); // last k elements
  nums.unshift(...rotated); // insert at beginning
  return nums;
}
```

- **Time Complexity:** O(k + n) – `splice` and `unshift` can be costly in large arrays.
- **Space Complexity:** O(k) – for storing `rotated`.

---

### ✅ **2. Brute Force Rotation (One by One)**

```js
function rotateArray(nums, k) {
  let size = nums.length;
  k = k % size;

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}
```

- **Time Complexity:** O(k * n) – very inefficient for large `k`
- **Space Complexity:** O(1)

---

### ✅ **3. Using Extra Array**

```js
function rotateArray(nums, k) {
  let size = nums.length;
  k = k % size;

  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[(i + k) % size] = nums[i];
  }

  for (let i = 0; i < size; i++) {
    nums[i] = result[i];
  }

  return nums;
}
```

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

✅ Efficient and clean, but uses extra space.

---

### ✅ **4. In-Place Reversal Method (Most Optimal)**

This is the best solution in terms of **time and space**.

```js
function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

function rotateArray(nums, k) {
  let size = nums.length;
  k = k % size;

  reverse(nums, 0, size - 1);       // Reverse entire array
  reverse(nums, 0, k - 1);          // Reverse first k elements
  reverse(nums, k, size - 1);       // Reverse rest

  return nums;
}
```

- **Time Complexity:** O(n)
- **Space Complexity:** O(1) ✅ best

---

### 🏁 Final Notes:

- If **performance matters**, use the **reverse method**.
- For **small arrays**, all approaches are acceptable.
- Avoid `.unshift()` for **large arrays** in performance-critical apps.

---