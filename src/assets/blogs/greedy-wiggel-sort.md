## My Solution

URL - https://leetcode.com/problems/wiggle-sort-ii

```
class Solution:
    def solve(self, nums, idx):
        i, j = 0, idx
        while j < len(nums):
            nums[i], nums[j] = nums[j], nums[i]

            i += 1
            j += 1

    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) == 1:
            return

        numsc = nums[:]
        numsc.sort()
        idx = 0

        from_mid = False
        mid = len(nums) // 2
        check = (mid + 1) if len(nums) % 2 == 1 else (mid - 1) 
        
		if numsc[mid] == numsc[check]:
            from_mid = True

        i, j = 0, mid + len(nums) % 2 if from_mid else len(nums)-1
        while idx < len(nums):
            nums[idx] = numsc[i]
            idx += 1
            if idx >= len(nums):
                break

            nums[idx] = numsc[j]
            idx += 1

            i += 1
            if from_mid:
                j += 1
            else:
                j -= 1

        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                self.solve(nums, i)
                break
        
```

## Optimized second solution

```
class Solution:
    def solve(self, nums, idx):
        i, j = 0, idx
        while j < len(nums):
            nums[i], nums[j] = nums[j], nums[i]

            i += 1
            j += 1

    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        numsc = nums.copy()
        numsc.sort()
        i = 0
        j = len(nums) // 2 + len(nums) % 2
        idx = 0
        while j < len(nums):
            nums[idx], nums[idx+1] = numsc[i], numsc[j]
            idx += 2
            i += 1
            j += 1

        if len(nums) % 2 == 1:
            nums[-1] = numsc[i]

        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                self.solve(nums, i)
                break

```

### Optimized solution from Leetcode

```
class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        tmp = nums.copy()
        tmp.sort()        
        n = len(nums)
        i, j = 1, n - 1
        for _ in range(2): 
            for k in range(i, n, 2): # when i == 1 then gt elements and when i == 0 then sm elements with jump of 2
                nums[k] = tmp[j] # sorted array tmp reverse order values assignment
                j -= 1
            i -= 1
```
