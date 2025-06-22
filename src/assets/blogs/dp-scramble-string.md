## 🔀 Optimized Solution for Scramble String Problem

```python
class Solution:
    map = {}

    def isScramble(self, s1: str, s2: str) -> bool:
        n = len(s1)
        if s1 == s2:
            return True
        a, b, c = [0] * 26, [0] * 26, [0] * 26
        if (s1 + s2) in self.map:
            return self.map[s1 + s2]
        for i in range(1, n):
            j = n - i
            a[ord(s1[i - 1]) - ord('a')] += 1
            b[ord(s2[i - 1]) - ord('a')] += 1
            c[ord(s2[j]) - ord('a')] += 1
            if a == b and self.isScramble(s1[:i], s2[:i]) and self.isScramble(s1[i:], s2[i:]):
                self.map[s1 + s2] = True
                return True
            if a == c and self.isScramble(s1[:i], s2[j:]) and self.isScramble(s1[i:], s2[:j]):
                self.map[s1 + s2] = True
                return True
        self.map[s1 + s2] = False
        return False
```

### 🔍 Observations

* Without using `map`, this is just a normal recursive solution with no memoization.
* The `map` here is used to store **pre-computed values** for `(s1, s2)` so that we don’t repeat work.

#### 📌 Key Detail – Storing Memoized Pairs with `s1 + s2`

* Using `s1 + s2` as a unique key is an effective trick **because both strings always have the same length**, so there’s **no key collision**.
* For example, we can be sure that `s1 + s2 = s3` will not be equal to any other `s4 + s5 = s3`, since the characters are arranged differently and order matters in string concatenation.

#### 🔄 Alternative Thought

* What if `s1` and `s2` were of different lengths or more complex combinations? In that case, using a tuple as a key — like `map[(s1, s2)] = result` — would be the more robust and safe choice.

#### 🎯 Another Good Optimization

* Before checking for scramble recursively, the solution performs a **frequency check** using character counts.
* This is a small check that helps eliminate invalid comparisons early, and it avoids the cost of expensive recursive calls when it’s already clear two substrings don’t match in composition.

---

## 🧠 My Solution – Using 4D DP with Explicit Indexing

```python
class Solution:
    def solve(self, s1, s2, l1, r1, l2, r2):
        if l1 == r1:
            if s1[l1] == s2[l2]:
                return True
            else:
                return False

        if self.dp[l1][r1][l2][r2] != None:
            return self.dp[l1][r1][l2][r2]

        for i in range(1, r1 - l1 + 1):
            res1 = self.solve(s1, s2, l1, l1 + i - 1, l2, l2 + i - 1) and self.solve(s1, s2, l1 + i, r1, l2 + i, r2)
            res2 = self.solve(s1, s2, l1, l1 + i - 1, r2 - i + 1, r2) and self.solve(s1, s2, l1 + i, r1, l2, r2 - i)

            if res1 or res2:
                self.dp[l1][r1][l2][r2] = True
                return True

        self.dp[l1][r1][l2][r2] = False
        return False

    def isScramble(self, s1: str, s2: str) -> bool:
        n = len(s1)
        self.dp = [
            [
                [
                    [None] * n 
                    for i in range(n)
                ] 
                for j in range(n)
            ] 
            for k in range(n)
        ]
        return self.solve(s1, s2, 0, len(s1) - 1, 0, len(s2) - 1)
```

---

## 🔎 My Thought Process

* I created a **4D DP array** to memoize overlapping subproblems. It took me some time to figure out the correct indexing for `res1` and `res2` because of how left and right values are assigned for both strings.
* I first solved the problem **without memoization** just to verify the recursive idea, and then added memoization using **indices**. I know from experience that indices are usually the best way to store precomputed results in DP problems.

---

### 🧩 Handling Index Splits – My Mental Model

* Figuring out the mapping between `x + y` of one string and `y + x` of the other string was tricky. The idea is:

  * We are scrambling `s1` to get `s2`.
  * If you split `s1` as `x + y`, it should either match `s2[:x], s2[x:]` **(same order)** or `s2[-x:], s2[:-x]` **(swapped order)**.

#### 🔢 Example to Remember Indexing

To make sense of this while splitting, I thought of the strings like arrays:

* Let’s say the array length is `6`, and `max-index = 5`.
* If we loop with `i = 1`, then the split becomes:

  * `arr[:1]` (i.e., index `0`)
  * `arr[1:]` (i.e., index `1` to `5`)
* So, we’re essentially doing `arr[:i]` and `arr[i:]` for the normal check.

But for the swapped comparison:

* If we want to compare `s1[:i]` with the **last part** of `s2`, we need:

  * `s2[r2 - i + 1 : r2 + 1]`
  * Why the `+1`? Because for `i = 1` and `r2 = 5`, this becomes `s2[5:6]` which is a 1-length slice, just like `s2[:1]`.

This visualization helps in writing the correct split boundaries.

---

## 🧵 Summary

* The problem can be solved in two main ways:

  * **String-keyed memoization** using `s1 + s2`
  * **Index-based DP** using a 4D array
* Both approaches are valid, but I preferred the indexed approach because I’m more comfortable with how indices work in DP problems.
* Handling correct index splits is a bit tricky at first, but breaking the string like an array helped me logically place my `l1`, `r1`, `l2`, `r2`.
