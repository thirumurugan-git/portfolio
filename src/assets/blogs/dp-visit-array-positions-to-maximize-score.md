## 🧠 My Solution – Visit Array Positions to Maximize Score

🔗 **LeetCode Link**: [Visit Array Positions to Maximize Score](https://leetcode.com/problems/visit-array-positions-to-maximize-score/)

```python
class Solution:
    def maxScore(self, nums: List[int], x: int) -> int:
        parities = [None, None]
        parities[nums[0] & 1] = nums[0]
        
        for i in range(1, len(nums)):
            maxi = -sys.maxsize
            for ind, num in enumerate(parities):
                if num is None:
                    continue
                penalty = x if ind != (nums[i] & 1) else 0
                maxi = max(maxi, nums[i] + num - penalty)
            parities[nums[i] & 1] = maxi
        
        return max(filter(lambda x: x is not None, parities))
```

---

## 🧭 Thought Process

### 🔹 Initial Attempt (Brute Force O(n²))

* For each `i`, check all `j` from `0` to `i - 1`:

  * Add `nums[j] + nums[i]`, subtract `x` if parities differ.
  * Keep max score for each position.
* This leads to **TLE** on large inputs.

### 🔹 Optimization Insight

* We don't need to revisit *all* previous positions.
* What matters is the **best previous score among matching parities**.
* So, we track only the **maximum score ending in odd parity** and **maximum score ending in even parity**.

### 🔹 Key Observation

* At each step `i`, we:

  * Add `nums[i]` to the max of:

    * The matching parity (no penalty)
    * The opposite parity (with `-x` penalty)

This is similar to the **fibonacci pattern**, where the current state only depends on the **two prior tracked states** (odd/even parity).

---

## 🔧 Best Leetcode Solution (Refined)

```python
fmax = lambda x,y: x if x > y else y
class Solution:
    def maxScore(self, nums: List[int], x: int) -> int:
        even = nums[0] - (x if nums[0]&1 else 0)
        odd  = nums[0] - (0 if nums[0]&1 else x)

        for i in range(1, len(nums)):
            if nums[i] & 1:
                odd = nums[i] + fmax(odd, even - x)
            else:
                even = nums[i] + fmax(even, odd - x)
        
        return fmax(odd, even)
```

---

## 🧵 Pattern Recognized

### 🔹 1D DP with Conditional State

* Like Fibonacci, the next state depends only on a **fixed number of tracked prior values**.
* But here, we **branch logic** based on a condition (parity).
* Each index’s value depends on either:

  * Same parity previous best (no cost)
  * Opposite parity previous best (with `-x` cost)

This is a variant of **"transition on state condition"**.

---

## 🧠 Future Pattern Recognition

If you see:

* A 1D list
* You’re trying to maximize a path/score
* Cost or penalty depends on some **condition (parity, sign, modulo, etc.)**
* Brute force seems like O(n²)

Then think:

> **Can I track only the "best-so-far" for each condition and use that to compute the current value?**

Similar to:

* **Fibonacci** (dp\[n] = dp\[n-1] + dp\[n-2])
* **Jumps to reach end** (track best value in `k`-window)
* **Sliding Window DP**, but with state tracking (odd/even, positive/negative)

---

## 🔧 Techniques Used

| Technique                     | Description                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------- |
| Track by condition (parity)   | Maintain separate scores for `odd` and `even` positions                      |
| State compression             | Store only what's needed (`odd`, `even`) instead of entire DP array          |
| Early pruning                 | Avoid full traversal by only using last best odd/even instead of all `j < i` |
| Transition cost conditionally | Subtract `x` when moving across different parity                             |

---

## 🛠️ Summary Tips for Future

* **When brute force is O(n²)**, look for redundant work.

* Try to **reduce to O(n)** by **caching conditional maximums**.

* Think:

  > *"Can I break this down by type/state (like even/odd) and only keep the best from each?"*

* This is a **greedy + 1D DP hybrid**, disguised by the parity condition.
