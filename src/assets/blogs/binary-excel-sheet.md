## My solution

- URL - https://www.geeksforgeeks.org/problems/excel-sheet5448/1

```
class Solution:
    def ExcelColumn(self, N):
        #return required string
        #code here
        
        ret = ''
        while N >= 26:
            N -= 1
            rem = N % 26
            N //= 26
            ret = chr(ord('A') + rem) + ret
            
        if N > 0:
            ret = chr(ord('A') + N - 1) + ret
        
        return ret
```


## My optimization

```
class Solution:
    def ExcelColumn(self, N):
        ret = ''
        while N > 0:
            N -= 1
            rem = N % 26
            N //= 26
            ret = chr(ord('A') + rem) + ret
        
        return ret
```

