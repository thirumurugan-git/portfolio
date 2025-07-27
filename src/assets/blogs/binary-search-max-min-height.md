### My Solution

- URL - https://www.geeksforgeeks.org/problems/max-min-height--170647/1

```
class Solution():
    def check(self, arr, k, w, height, diff):
        prev = 0
        for i in range(len(arr)):
            curr = diff[i] + prev
            prev = curr
            
            if curr >= height:
                continue
            
            d = height - curr
            k -= d
            
            if k < 0:
                return False
                
            prev += d
            if i + w < len(arr):
                diff[i + w] -= d
                
        return True
            
    
    def maxMinHeight(self, arr, k, w):
        # code here
        low = min(arr)
        high = low + k
        
        diff = [0] * len(arr)
        diff[0] = arr[0]
        
        for i in range(1, len(arr)):
            diff[i] = arr[i] - arr[i-1]
        
        while low <= high:
            mid = (low + high) // 2
            
            check = self.check(arr, k, w, mid, diff.copy())
            
            if check:
                low = mid + 1
            else:
                high = mid - 1
                
        return high
```

- I was thinking above, we need to increase the values for k days. So there should be k loop and inside it, we should increase the lowest height flowers. But the problem is if `w` is greater than 1 then how should we choose the best index with length `w`. It confused me lot. And later I moved to comment section and got idea of using binary search on answer space with using diff array. Binary search is mostly working on contiguous split or contiguous sub array problem with the given answer space.

## Pattern

- Binary search with diff array.
