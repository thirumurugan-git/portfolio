## My solution

- URL - https://www.geeksforgeeks.org/problems/next-element-with-greater-frequency--170637/1

```
class Solution:
    def findGreater(self, arr):
        # code here
        frq = {}
        for i in arr:
            frq[i] = frq.get(i, 0) + 1
            
        res = [-1] * len(arr)
        stack = []
        for i, v in enumerate(arr):
            while stack and frq[arr[stack[-1]]] < frq[v]:
                res[stack.pop()] = v
            
            stack.append(i)
            
        return res
```

- From the problem itself, it tells to find the closest highest frquency value. If we are going to find the closest high values like that we will use stack. Like that I used stack as the DS to solve this.

