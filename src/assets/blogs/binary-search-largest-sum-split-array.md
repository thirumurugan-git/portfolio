## My Solution

- URL - https://www.geeksforgeeks.org/problems/split-array-largest-sum--141634/1

```
class Solution:
    
    def solve(self, arr, val):
        t = 0
        cnt = 1
        for i in arr:
            if t + i <= val:
                t += i
            else:
                cnt += 1
                t = i
            
        return cnt
    
    def splitArray(self, arr, k):
        # code here
        low, high = max(arr), sum(arr)
        
        while low <= high:
            mid = (low + high) // 2
            
            cnt = self.solve(arr, mid)
            
            if cnt <= k:
                high = mid - 1
            else:
                low = mid + 1
                
        return low
```

- Binary search on answer space.
- Dervie binary search condition based on T T T F F F. Need to find first F or first T or if the values are reversed.