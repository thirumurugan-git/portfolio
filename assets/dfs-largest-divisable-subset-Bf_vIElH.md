# 🔗 Largest Divisible Subset — Graph + DFS Approach

### 🔗 Problem URL

[GeeksforGeeks - Largest Divisible Subset](https://www.geeksforgeeks.org/problems/largest-divisible-subset--170643/1)

---

### 🧩 Problem Statement

Given an array of positive integers `arr[]`, the task is to find the **largest subset** such that for every pair `(i, j)` in the subset:

> Either `arr[i] % arr[j] == 0` or `arr[j] % arr[i] == 0`

Return the subset with **maximum length** that satisfies the above condition.

---

### 💡 Observations & Thought Process

At first glance, the problem feels similar to a **geometric progression**, e.g., if we have `[1, 8]` in the subset and the next number is `64`, it fits because:

* `8` divides `64`
* `1` divides both `8` and `64`

But what if the next number is `72`?

* `1` and `8` divide `72`, but `64` does not → breaks the chain.

Thus, any number added to the subset must be **divisible by the previous number** in the subset (ideally the largest so far). This logic forms a **tree-like structure** where a parent node (say `8`) may have multiple children (e.g., `64`, `72`, etc.).

However, there's more:

* Some numbers form **independent chains**, e.g., `7 → 49`, which aren’t connected to `1 → 8 → 64`.
* A number might have **multiple parents**, such as `9` being divisible by both `1` and `3`.

So this is not a tree — it’s a **graph**.

---

### 🧠 Approach

We approach the problem as a **graph traversal problem**:

* Construct a graph where an edge exists from `a` to `b` if `b % a == 0`.
* Each number can have multiple incoming or outgoing connections.
* Perform **DFS with memoization** from each node to compute the **longest divisible chain** starting from that number.
* Keep track of the path with the **maximum length**.
* Finally, reconstruct the path from the memoized structure.

---

### 🧮 Python Implementation

```python
class Solution:
    def dfs(self, vis, dp, d, value):
        vis.add(value)
        
        maxi_len = 0
        maxi_num = -1
        duplicates = 0
        for i in d.get(value, []):
            if i == value:
                duplicates += 1
                continue

            if i not in vis:
                length, _ = self.dfs(vis, dp, d, i)
            else:
                length, _ = dp[i]

            if length > maxi_len or (length == maxi_len and maxi_num < i):
                maxi_len = length
                maxi_num = i
            
        dp[value] = (maxi_len + duplicates + 1, maxi_num)
        return dp[value]

    def largestSubset(self, arr):
        d = {}
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                a, b = min(arr[i], arr[j]), max(arr[i], arr[j])
                d.setdefault(a, []).append(b) if b % a == 0 else None
                d.setdefault(b, [])
        
        vis = set()
        dp = {}
        maxi_len, maxi_num = 0, -1
        
        for key in d:
            if key not in vis:
                l, num = self.dfs(vis, dp, d, key)
                if l > maxi_len or (l == maxi_len and maxi_num < key):
                    maxi_len = l
                    maxi_num = key

        res = []
        lengths = []
        while maxi_num != -1:
            res.append(maxi_num)
            length, maxi_num = dp[maxi_num]
            lengths.append(length)
        lengths.append(0)

        nres = []
        for i in range(len(res)):
            nres += [res[i]] * (lengths[i] - lengths[i+1])

        return nres
```

---

### 🧵 Pattern Observed

* The structure is a **graph**, not a tree, since nodes can have:

  * **Multiple parents** (e.g., `9` from `1`, `3`)
  * **Multiple children** (e.g., `1` to `3`, `9`, `27`)
* Our task is to find the **longest path** in this directed graph.
* This is a classic case for **DFS + memoization**.

---

### ✅ Summary

* View this problem as a **graph traversal** where each number points to all its divisible successors.
* Use **DFS with memoization** to avoid redundant computations.
* Track the **maximum length path** across all nodes to get the largest divisible subset.
* Elegant use of recursion and dynamic programming together.
