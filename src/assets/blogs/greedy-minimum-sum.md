# Minimizing the Sum by Forming Two Numbers from Digits

### 📌 Problem Statement

Given an array `arr[]` consisting of digits (`0–9`), the goal is to form two numbers using **all the digits** such that the **sum of these two numbers is minimized**. Return this minimum possible sum as a **string with no leading zeroes**.

🔗 [Problem Link - GeeksforGeeks](https://www.geeksforgeeks.org/problems/minimum-sum4058/1)

---

### 🧠 Approach

To achieve the minimum sum, we must distribute digits between two numbers such that both have **minimum most significant digits (MSD)**. Assigning the smaller digits to the MSD of each number helps minimize their overall value.

We follow a **greedy approach**:

1. **Remove zeroes** temporarily from the array (as they don't contribute to MSD).
2. **Sort the digits** to ensure smallest digits are used first.
3. **Alternately assign** digits to two strings `a` and `b` — this mimics building two numbers with minimal leading values.
4. Convert the final strings to integers and return their sum.

Instead of constructing numeric values through multiplication and addition (which can be computationally heavy with large numbers), we concatenate digits as **strings** and perform a final integer addition.

> ⚠️ Note: This approach only works when digits are in the range `0 ≤ arr[i] ≤ 9`. If any digit exceeds this range, it would break the assumptions.

---

### 💡 Key Observations

* Sorting the digits helps control how we distribute the minimal values between both numbers.
* Greedy selection of digits ensures that both numbers grow gradually and evenly.
* Using strings for intermediate values avoids overflow or unnecessary arithmetic operations.

---

### 📦 Python Implementation

```python
import sys

# Set a high limit for string conversion of large integers if needed
sys.set_int_max_str_digits(10**7) 

class Solution:
    def minSum(self, arr):
        # Filter out zeros and sort the digits
        arr = list(filter(lambda x: x != 0, arr))
        arr.sort()
        n = len(arr)

        # Use two pointers to construct the two numbers alternately
        i, j = 0, 1
        a = ''
        b = ''

        while i < n and j < n:
            a += str(arr[i])
            b += str(arr[j])
            i += 2
            j += 2

        # If one digit remains, assign it to 'a'
        if i < n:
            a += str(arr[i])

        # Return the final sum
        return int(a) + (int(b) if b != '' else 0)
```

---

### ⏱ Time Complexity

* **Sorting**: `O(N log N)`
* **Digit Distribution**: `O(N)`
* **Total**: `O(N log N)` — efficient for practical input sizes.

---

### 🔁 Pattern Recognition

* Sorting digits and assigning them alternately ensures minimal sum.
* This technique is commonly seen in **greedy digit distribution** problems where minimizing or maximizing numerical value is the goal.
