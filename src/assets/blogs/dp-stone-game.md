## 🧠 My Solution – Stone Game

🔗 **LeetCode Link**: [Stone Game](https://leetcode.com/problems/stone-game/)

```python
class Solution:
    def helper(self, piles, l, r):
        if r < l:
            return 0

        if self.dp[l][r] != -1:
            return self.dp[l][r]

        p1 = self.helper(piles, l+2, r)
        p2 = self.helper(piles, l+1, r-1)
        p3 = self.helper(piles, l, r-2)

        res = max(piles[l] + min(p1, p2), piles[r] + min(p2, p3))

        self.dp[l][r] = res
        return res

    def stoneGame(self, piles: List[int]) -> bool:
        self.dp = [[-1] * len(piles) for _ in range(len(piles))]
        return 2 * self.helper(piles, 0, len(piles) - 1) > sum(piles)
```

---

## 📜 Problem Summary

You're given an array `piles` of stone piles, and two players (Alice and Bob) play optimally. On each turn, a player removes either the leftmost or rightmost pile. The goal is to collect more stones than the opponent.

The task is to determine whether **Alice wins**, assuming both players play optimally.

---

## 🧠 Thought Process

This problem is solved using **2D memoization (DP)** because:

* Each player's move depends on the current range `[l..r]` of remaining piles.
* The function `dp[l][r]` stores the maximum stones Alice can collect from index `l` to `r`.

### 🧩 Breakdown:

1. **Turn Simulation:**

   * Alice goes first and picks either pile `l` or pile `r`.
   * Bob (playing optimally) will then be given the **remaining range**, and he'll also pick optimally.
   * We only track **Alice's total**, because `Bob's total = total_sum - Alice's total`.

2. **Opponent’s Strategy (Bob):**

   * Bob will always pick a move that **minimizes Alice’s future gain**.
   * So Alice's result for each choice depends on the **minimum** of the two options Bob would leave her with.

3. **Recursive Choices:**

   * If Alice picks pile `l`:
     Bob now chooses from `[l+1..r]`, and the subcases are:

     * If Bob picks `l+1`, Alice faces `[l+2..r]`
     * If Bob picks `r`, Alice faces `[l+1..r-1]`
   * If Alice picks pile `r`:
     Bob now chooses from `[l..r-1]`, and the subcases are:

     * If Bob picks `l`, Alice faces `[l+1..r-1]`
     * If Bob picks `r-1`, Alice faces `[l..r-2]`

Thus, the recurrence becomes:

```python
res = max(
    piles[l] + min(p1, p2),  # Alice takes left, Bob gives her worst of p1, p2
    piles[r] + min(p2, p3)   # Alice takes right, Bob gives her worst of p2, p3
)
```

We cache these results in `dp[l][r]` for efficiency.

---

## 🧵 Key Patterns and Techniques

### 🔹 2D Dynamic Programming

* The subproblem depends on a **range** `[l..r]`.
* Use a 2D table: `dp[l][r]` stores the optimal score Alice can get from this segment.

### 🔹 Only Track One Player

* We don’t need to track both players. Just track **Alice’s score**.
* Use `2 * Alice_score > total_sum` to determine if she wins.

### 🔹 Opponent Always Minimizes Your Gain

* **Optimal strategy**: Opponent will make decisions that leave **you** with the **least benefit**.
* When simulating the opponent's move, take the **minimum** of the next recursive outcomes.

### 🔹 Range-Based Simulation

* Since players remove from either end of the array, simulate both cases using:

  * `helper(l + 2, r)` or `helper(l + 1, r - 1)` (Bob’s move after Alice picks left)
  * `helper(l, r - 2)` or `helper(l + 1, r - 1)` (Bob’s move after Alice picks right)

---

## 🧠 How to Recognize and Reuse This Pattern in Future Problems

When you see problems like:

* Two players taking turns
* Removing elements from ends of an array
* Trying to win based on **maximum accumulated score**
* **"Both play optimally"** is mentioned

Then you can think:

> This is a **Range DP Game Theory** problem.

### 🔁 Future Pattern Recall Tips

* **Function Signature**: Use `helper(l, r)` to represent decisions on subarray `[l..r]`.
* **Track One Player**: Usually, tracking the first player is enough; derive the second from the total.
* **Max vs Min**: If one player tries to **maximize**, the other is trying to **minimize** the first’s future options.
* **DP Table**: Use a 2D table `dp[l][r]` when the game depends on index ranges.

> Think:
> **“I play first, and you play to ruin my plan. So I assume you’ll give me the worst-case outcome.”**

---

## 🔧 Useful Techniques Summary

| Technique              | When to Use                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| 2D DP Table `dp[l][r]` | When the problem is range-based decisions (`l..r`)                         |
| Maximize vs Minimize   | When opponents play optimally, simulate with `max` for self, `min` for foe |
| Track One Player       | Save space and simplify by calculating one player and inferring the other  |
| Base Case: `l > r`     | Return `0` when there are no stones to take                                |
| Final Check            | Use `2 * Alice_score > sum(piles)` to determine victory                    |
