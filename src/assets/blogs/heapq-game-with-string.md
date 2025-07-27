### My solution

- URL - https://www.geeksforgeeks.org/problems/game-with-string4100/1

```
from heapq import heapify, heappush, heappop

class Solution:
    def minValue(self, s, k):
        #code here
        
        frq = {}
        for i in s:
            frq[i] = frq.get(i, 0) + 1
        
        values = list(map(lambda x: -x, frq.values()))
        heapify(values)
        
        while k > 0:
            top = heappop(values)
            diff = values[0] - top
            neg = min(diff + 1, k)
            k -= neg
            heappush(values, top + neg)
        
        res = 0
        for i in values:
            res += i**2
            
        return res
        
        
```

## Problem statement

- Given a string s consisting of lowercase alphabets and an integer k, your task is to find the minimum possible value of the string after removing exactly k characters.

The value of the string is defined as the sum of the squares of the frequencies of each distinct character present in the string.

## My intution

- As per the problem statement, I need to remove the characters, so, I can remove the characters from any index i.e it is non-monotonocity. We should select the removing character greedily to get the minimum sum of the frequency square value. So, I am going to deal with frequencies array not by the character. I assume, frequency array is [4, 3, 2, 1] and k is 2. You can think of array as any character for each index because it's not about order. for the above example, I need to get the minimum sum by squaring. So, I can remove the k as I want like I can remove the k value from the frequency list as my wish like I can remove completely from one frequency index or split the k value and reduce the splits wherever I wish but my ultimate goal is to reduce the sum. In the above example, [4, 3, 2, 1] if k = 1, where I should reduce this k value from the array, If I remove 1, I am going to just remove 1^2 from the value but if I reduce 1 from 4 i.e 4-1 = 3 i.e 16 - 9 = 5, Then I have reduced high value than smaller, reducing smaller value results in maximum sum but I need minimum sum. So we can remove the k-value from maximum frequency. 

- Core logic to choose maximum value to reduce the k-value is:
	2^2 - 1^2 = 1
	3^2 - 2^2 = 4
	4^2 - 3^2 = 7
	5^2 - 4^2 = 9

	If you reduce the 1 value from the max num from the array then you are reducing the max square value from the sum. that's why we are reducing the the k value from the max num.

- To improve the reducing logic, 
	If we have frequency array as [8, 3, 2], reducing 1 from 8 becomes 7 and reducing from the 7 is 6. You always selecting the max value. So 8 is the maximum value if reduce it 1 by 1 then you have to reduce 8 - 3 = 5 times to reach the 3 value. If you reach [3, 3, 2] then you will reduce again from 3 itself to get 2 then the array is [2, 3, 2]. Thats why you have to choose (top - second + 1) from the max element. While choosing this element you should definitly know (top - second + 1) <= k else we should choose k as reducing value. We used heapq to get the maximum value.
