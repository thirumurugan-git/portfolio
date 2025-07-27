## My Solution

- URL - `https://www.geeksforgeeks.org/problems/find-the-longest-string--170645/1`

```
class Trie:
    def __init__(self):
        self.data = [None] * 26
        self.is_end = False
    
    def insert(self, word):
        curr = self
        for i in word:
            ind = ord(i) - ord('a')
            if curr.data[ind] == None:
                curr.data[ind] = Trie()
            curr = curr.data[ind]
        curr.is_end = True

class Solution():
    
    def dfs(self, trie):
        if trie == None:
            return 0, ''
            
        maxi = 0
        match = ''
        for i in range(26):
            m, mat = self.dfs(trie.data[i])
            if m > maxi:
                maxi = m
                match = chr(ord('a') + i) + mat

        if trie.is_end:
            maxi += 1

        return maxi, match
    
    def longestString(self, arr):
        trie = Trie()
        for i in arr:
            trie.insert(i)
        
        return self.dfs(trie)[1]
```
