## My Solution - not accepted need to work

- URL - https://leetcode.com/problems/stamping-the-grid

```
class Solution:
    def possibleToStamp(self, grid: List[List[int]], stampHeight: int, stampWidth: int) -> bool:
        row = len(grid)
        col = len(grid[0])

        curr = [0] * col

        for r in range(row):
            cnt = 0
            for c in range(col):
                if grid[r][c] == 1:
                    if curr[c] < stampHeight and curr[c] != 0:
                        return False

                    if cnt < stampWidth and cnt != 0:
                        return False

                    cnt = 0
                    curr[c] = 0
                else:
                    cnt += 1
                    curr[c] += 1

            # Check at the end of the col
            if stampWidth > cnt > 0:
                return False 

        # Check at the end of the last row
        for c in range(col):
            if 0 < curr[c] < stampHeight:
                return False

        return True
```

## Rework - Need to store (min_height, length) at each empty cell. If you found non-empty cell then you have to check the dp[r-1, c], dp[r, c-1] index value is greater the stamp size.
