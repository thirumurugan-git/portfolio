## My solution

- URL - https://www.geeksforgeeks.org/problems/max-sum-in-sub-arrays0824/1

```
class Solution:
    def maxSum(self, arr):
        # code here
        stack = []
        maxi = 0
        for i in arr:
            if stack:
                maxi = max(maxi, stack[-1] + i)
                
            while stack and stack[-1] < i:
                stack.pop()
            
            stack.append(i)
        
        return maxi
```

## Optimized solution from geeksforgeeks comments

```
class Solution {
  public:
    

int maxSum(vector<int> &arr) {
        // code here
        // suppose we have 2 integers which are smallest and 2nd smallest in their window
        // those are i, j
        // and between then we can have elements smaller than them
        // if we have larger element 
        // then we will prefer to include them such that they are smallest
        // untill there is larger element than j
        // we will move j to left
        // and cause every element is larger
        // we will ultimately move to i+1
        // so greedily max will always be sum of adjacent elements
        int maxi=0;
        for(int i=0;i+1<arr.size();i++){
            maxi=max(maxi,arr[i]+arr[i+1]);
        }
        return maxi;
    }
};
```
