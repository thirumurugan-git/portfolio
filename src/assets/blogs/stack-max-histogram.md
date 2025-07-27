### My Solution

- URL - https://leetcode.com/problems/largest-rectangle-in-histogram/

```
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = [-1]
        maxi = max(heights)
        for i, v in enumerate(heights):
            while stack and len(stack) > 1 and heights[stack[-1]] > v:
                maxi = max(maxi, (i - stack[-2] - 1) * heights[stack[-1]])
                stack.pop()
            stack.append(i)

        for i in range(1, len(stack)):
            v = stack[i]
            length = len(heights) - stack[i-1] - 1
            maxi = max(maxi, length * heights[v])

        return maxi
```

## Optimized solution in Leetcode

```
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = [-1]
        max_area = 0
        for i in range(len(heights)):
            while stack[-1] != -1 and heights[stack[-1]] >= heights[i]:
                current_height = heights[stack.pop()]
                current_width = i - stack[-1] - 1
                max_area = max(max_area, current_height * current_width)
            stack.append(i)

        while stack[-1] != -1:
            current_height = heights[stack.pop()]
            current_width = len(heights) - stack[-1] - 1
            max_area = max(max_area, current_height * current_width)
        return max_area
```

- This also looks like mine code.

