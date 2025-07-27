## My Solution

- URL - https://leetcode.com/problems/wildcard-matching

```
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        n = len(s)
        m = len(p)
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        # for i in range(m+1):
        #     dp[i][0] = True
        dp[0][0] = True
        for j, pat in enumerate(p):
            if pat == '*' and dp[j][0]:
                dp[j+1][0] = True
            for i, c in enumerate(s):
                # if pat == '?' or pat == '*':
                #     dp[i+1] = dp[i + 1] if not dp[i] else dp[i]
                # elif pat == c:
                #     dp[i+1] = dp[i]
                
                # if pat is ? then assign dp[j][i]
                # if pat is * then assign dp[j][i+1] or dp[j][i] or dp[j+1][i]
                # if char matches with pat then dp[j][i]

                if pat == '?' or pat == c:
                    dp[j+1][i+1] = dp[j][i]
                elif pat == '*':
                    dp[j+1][i+1] = dp[j][i+1] or dp[j][i] or dp[j+1][i]

        print(dp[1:3])

        return dp[-1][-1]

```

## Optimized solution from leetcode

```
class Solution:
    def isMatch(self, st: str, pattern: str) -> bool:
        s, p, mat, star_idx = 0, 0, 0, -1

        while s < len(st):
            if p < len(pattern) and (pattern[p] == '?' or pattern[p] == st[s]):
                s += 1
                p += 1
            elif p < len(pattern) and pattern[p] == '*':
                star_idx = p
                mat = s
                p += 1
            elif star_idx != -1:
                p = star_idx + 1
                mat += 1
                s = mat
            else:
                return False

        while p < len(pattern) and pattern[p] == '*':
            p += 1

        return p == len(pattern)
```
