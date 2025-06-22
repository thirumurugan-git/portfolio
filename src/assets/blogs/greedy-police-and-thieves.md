# 👮‍♂️ Catch the Thieves (Greedy Algorithm)

### 🧩 Problem Statement

You are given an array `arr[]`, where each element is either:

* `'P'` representing a **policeman**, or
* `'T'` representing a **thief**.

Each policeman can catch **only one thief**, and only if the **distance between them is at most `k`** (i.e., `abs(i - j) <= k` where `i` and `j` are indices of the policeman and thief).

**Goal:** Find the **maximum number of thieves** that can be caught.

---

### 🔍 Insight & Intuition

The task boils down to **greedily pairing** each policeman with the **nearest thief** such that:

* They are within `k` distance.
* Each character (police or thief) is used only once.

To maximize the total catches, we should always try to pair a policeman with the **closest available thief**, preferably the **leftmost thief** within range.

This ensures:

* The thief on the left doesn’t get skipped when he might be the only one reachable for a police unit behind him.
* Thieves to the right can still be paired with policemen ahead.

Think of the greedy match like this:

```text
T1 . . . P . . . T2
```

Here, `P` should catch `T1` (if within range), because that leaves `T2` for another policeman (if available). If `P` catches `T2`, `T1` might never get caught.

---

### 🧠 Approach

We simulate the matching using **two pointers**:

* One pointer `i` finds the next **thief**.
* One pointer `j` finds the next **policeman**.

At each step:

1. Skip until a thief is found at `i`.
2. Skip until a policeman is found at `j`.
3. If their positions are within `k` distance:

   * Count it as a match.
   * Move both pointers forward.
4. If they’re too far apart:

   * Move the one who is behind, so we can potentially close the gap.

Repeat until either list is fully traversed.

---

### 💻 Python Implementation

```python
class Solution:
    def catchThieves(self, arr, k):
        i = 0
        j = 0
        cnt = 0
        
        while i < len(arr) and j < len(arr):
            # Move i to next thief
            while i < len(arr) and arr[i] != 'T':
                i += 1

            # Move j to next police
            while j < len(arr) and arr[j] != 'P':
                j += 1

            if i >= len(arr) or j >= len(arr):
                break

            # If thief and police are within distance k
            if abs(i - j) <= k:
                cnt += 1
                i += 1
                j += 1
            else:
                # Move the one who is behind
                if i < j:
                    i += 1
                else:
                    j += 1

        return cnt
```

---

### ⏱ Time Complexity

* **O(N)** where `N` is the length of the array.
* Each element is visited at most once by each pointer.

---

### ✅ Summary

* This is a classic **greedy two-pointer** problem.
* Greedily match nearest policeman–thief pairs within `k` distance.
* Always prioritize pairing the **leftmost valid thief** to maximize future opportunities.
