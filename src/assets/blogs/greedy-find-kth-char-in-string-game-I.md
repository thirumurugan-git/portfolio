### My solution in leetcode

- URL - https://leetcode.com/problems/find-the-k-th-character-in-string-game-i

```
import math

class Solution:
    def kthCharacter(self, k: int) -> str:
        if k == 1:
            return 'a'

        nearest_high = math.ceil(math.log2(k))
        nearest_high_sq = 2 ** nearest_high
        nk = k - nearest_high_sq // 2
        char = self.kthCharacter(nk)
        nchar = chr(ord('a') + (ord(char) - ord('a') + 1) % 26)
        return nchar
```

## Optimized solution without recursion

```
class Solution:
    def kthCharacter(self, k: int) -> str:
        # string=["a"]
        # while len(string)<=k:
        #     next_string=[chr(((ord(c)-ord('a')+1)%26)+ord('a')) for c in string]
        #     string+=next_string
        # return string[k-1]

        ans = 0
        while k != 1:
            t = k.bit_length() - 1
            if (1 << t) == k:
                t -= 1
            k -= 1 << t
            ans += 1
        return chr(ord("a") + ans)
```
