## 🧠 My Solution – Stone Game V

🔗 **LeetCode Link**: [https://leetcode.com/problems/stone-game-v](https://leetcode.com/problems/stone-game-v)

```python
class Solution:
    def solve(self, stone, l, r, pre_sum, memo):
        if l == r:
            return 0

        if memo[l][r] != 0:
            return memo[l][r]

        curr_sum = pre_sum[r + 1] - pre_sum[l]
        left_sum = 0
        max_sum = 0

        for i in range(l, r):
            left_sum += stone[i]
            right_sum = curr_sum - left_sum

            if left_sum == right_sum:
                tsum = left_sum + max(
                    self.solve(stone, l, i, pre_sum, memo),
                    self.solve(stone, i + 1, r, pre_sum, memo)
                )
            elif left_sum < right_sum:
                tsum = left_sum + self.solve(stone, l, i, pre_sum, memo)
            else:
                tsum = right_sum + self.solve(stone, i + 1, r, pre_sum, memo)

            max_sum = max(max_sum, tsum)

        memo[l][r] = max_sum
        return max_sum

    def stoneGameV(self, stoneValue: List[int]) -> int:
        n = len(stoneValue)
        pre_sum = [0] * (n + 1)
        for i in range(n):
            pre_sum[i + 1] = pre_sum[i] + stoneValue[i]
        memo = [[0] * n for _ in range(n)]
        return self.solve(stoneValue, 0, n - 1, pre_sum, memo)
```

---

## 📜 Problem Statement Summary

We are given a list of stone values arranged in a row. Alice plays a game where in each round:

1. She splits the row into **two non-empty** parts.
2. Bob removes the part with the **larger total sum**.
3. If both parts are equal, Alice chooses which part to discard.
4. Alice gains points equal to the **sum of the remaining part**.
5. The game continues with the remaining row until only one stone remains.

We need to compute the **maximum score Alice can get** following optimal play.

---

## 🔍 Observation and Thought Process

Right from the problem description, I noticed:

* At every turn, Alice must split the array into two parts.
* The optimal strategy involves always keeping the **minimum sum half**.
* I applied a **recursive strategy** where:

  * I simulate every possible cut using index `i` from `l` to `r`.
  * Use prefix sums to quickly compute left and right partition sums.
  * I store results in a `memo` to avoid recomputation since `[l, r]` always yields the same result.

This leads to a clean top-down DP approach, which reminds me of classic **Matrix Chain Multiplication (MCM)** patterns. Just like MCM, we explore all split points and combine the results from subproblems.

---

## 🔁 Pattern Recognized

* When you’re trying all **splits in a range \[l..r]** and combine results recursively, it's an **MCM-style pattern**.
* Use prefix sums to compute subarray sums in constant time.
* Use a 2D memoization table for overlapping subproblems: `memo[l][r]`.
* Time Complexity: `O(N^2)`
* Space Complexity: `O(N^2)`

---

## ⚡ Optimized Solution Using Prefix Sum + Binary Search

```python
from itertools import accumulate
from bisect import bisect_left
from functools import cache

class Solution:
    def stoneGameV(self, stoneValue: List[int]) -> int:
        sv = [0, *accumulate(stoneValue)]

        @cache
        def helper(fro, to):
            if to - fro == 1:
                return 0

            mid = bisect_left(sv, (sv[to] + sv[fro]) // 2)
            dist = res = 0
            explore_more = True

            while explore_more:
                explore_more = False
                for i in [mid - dist, mid + dist]:
                    if fro < i <= to:
                        left, right = sv[i] - sv[fro], sv[to] - sv[i]
                        if res // 2 <= left <= right:
                            res = max(res, left + helper(fro, i))
                            explore_more = True
                        if left >= right >= res // 2:
                            res = max(res, right + helper(i, to))
                            explore_more = True
                dist += 1
            return res

        return helper(0, len(stoneValue))
```

---

## 🧠 Why `res // 2` Comparison Works

This is a clever optimization: instead of checking every index `i` between `l` and `r`, binary search helps identify an index where the prefix sum is close to the halfway point. Then we expand outwards as long as we find better results.

The check `res // 2 <= left or right` ensures:

* We're only exploring promising partitions that could increase `res`.
* Since we're always cutting the array and only retaining the **smaller sum**, the total score from future steps must be **less than the current total**.
* This works like **binary value growth**:
  For example:

  * Sum = 8 → possible scores could be `4 + 2 + 1 = 7`
  * Which is `< 8` — and resembles binary splits:
    `2^4 > 2^3 + 2^2 + 2^1 + 2^0` or `10000 > 1111`.

---

## 🧵 How to Remember This Pattern for the Future

To recall and reuse this technique in similar problems, remember the following:

### 🔹 Pattern Recognition

* If the problem asks to **split an array into parts** and you are:

  * Making a decision at every possible split point.
  * Want to optimize/maximize some result.
    → Think **Matrix Chain Multiplication** style recursion or DP.

### 🔹 When to Use `binary_search + prefix_sum`

* You're trying to **find a point in the array where two parts have nearly equal sums**.
* You want to **avoid looping over every split index**.
* You have a **prefix sum array**, and you're trying to find an index with sum ≈ target.
* Use:

  ```python
  mid = bisect_left(prefix_sum_array, (prefix_sum[r] + prefix_sum[l]) // 2)
  ```
* Then expand outward to test nearby splits.

---

## 🧰 Techniques & Tools Recap

| Technique              | Usage                                                     |
| ---------------------- | --------------------------------------------------------- |
| `@cache`               | Pythonic memoization for recursion                        |
| `itertools.accumulate` | Fast prefix sum computation                               |
| `bisect_left`          | Find index where prefix sum crosses target                |
| `res // 2` check       | Prune bad paths; only explore halves that can improve     |
| MCM-style recursion    | Try all valid splits between `[l..r]` and combine results |
