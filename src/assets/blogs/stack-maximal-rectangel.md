## My solution

- URL - https://leetcode.com/problems/maximal-rectangle/

```
class Solution:
    def findMax(self, heights):
        stack = [-1]
        maxi = 0
        for i, v in enumerate(heights):
            while stack[-1] != -1 and heights[stack[-1]] > v:
                height = heights[stack.pop()]
                length = i - stack[-1] - 1
                maxi = max(maxi, height * length)
            stack.append(i)

        for i in range(1, len(stack)):
            length = len(heights) - stack[i-1] - 1
            height = heights[stack[i]]
            maxi = max(maxi, length * height)

        return maxi

    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        rows, cols = len(matrix), len(matrix[0])
        curr = [0] * cols
        maxi = -1
        for r in range(rows):
            for c in range(cols):
                curr[c] = (curr[c] + 1) if matrix[r][c] == '1' else 0
            print(curr)
            maxi = max(maxi, self.findMax(curr))

        return maxi
```

- my solution is best solution in leetcode as it beats all the existing solution.

