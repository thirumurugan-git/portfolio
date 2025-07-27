## My Solution

- URL - `https://www.geeksforgeeks.org/problems/maximum-sum-combination/1`

```
from heapq import heappush, heappop

class Solution:
    def topKSumPairs(self, a, b, k):
        # code here
        a.sort(reverse=True)
        b.sort(reverse=True)
        
        ans = []
        vis = set()
        n = len(a)
        
        q = [(-(a[0] + b[0]), (0, 0))]
        
        while len(ans) < k:
            val, (x, y) = heappop(q)
            ans.append(-val)
            if x + 1 < n and ((x+1, y) not in vis):
                vis.add((x+1, y))
                heappush(q, (-(a[x+1] + b[y]), (x+1, y)))
            
            if y + 1 < n and ((x, y+1) not in vis):
                vis.add((x, y+1))
                heappush(q, (-(a[x] + b[y+1]), (x, y+1)))

        return ans
```
