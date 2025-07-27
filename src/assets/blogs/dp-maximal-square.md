## My Solution

```
class Solution:
    def findMaxSquare(self, heights):
        stack = [-1]
        maxi = 0
        for i, v in enumerate(heights):
            while stack[-1] != -1 and heights[stack[-1]] > v:
                height = heights[stack.pop()]
                length = i - stack[-1] - 1
                side = min(height, length)
                maxi = max(maxi, side**2)
            stack.append(i)

        for i in range(1, len(stack)):
            length = len(heights) - stack[i-1] - 1
            height = heights[stack[i]]
            side = min(length, height)
            maxi = max(maxi, side**2)

        return maxi

    def maximalSquare(self, matrix: List[List[str]]) -> int:
        curr = [0] * len(matrix[0])
        maxi = -1
        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                curr[c] += 1 if matrix[r][c] == '1' else -curr[c]
            maxi = max(maxi, self.findMaxSquare(curr))
        return maxi
```

- Uses the same code of `maximal rectange`. However it finds the minimum side from length and height.

## DP solution in leetcode

```
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if not matrix: return 0
        rows, cols = len(matrix), len(matrix[0])
        dp = [[0]*(cols+1) for _ in range(rows+1)]
        max_side = 0
        
        for i in range(1, rows+1):
            for j in range(1, cols+1):
                if matrix[i-1][j-1] == '1':
                    dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
                    max_side = max(max_side, dp[i][j])
        
        return max_side * max_side
```