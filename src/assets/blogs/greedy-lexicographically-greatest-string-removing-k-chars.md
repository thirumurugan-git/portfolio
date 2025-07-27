## My Implementation using deque

- GeeksForGeeks - https://www.geeksforgeeks.org/problems/lexicographically-largest-string-after-deleting-k-characters/1

```c++
#include <bits/stdc++.h>

using namespace std;

class Solution {
  public:
    string maxSubseq(string& s, int k) {
        // code here
        deque<int> q;
        int q_idx = 0;
        int idx = 0;
        string res;
        while (k > 0 && idx < s.size() - k) {
            // Keep q_idx to update the deque from wherever we stop.
            int nq_idx = min(idx + k + 1, (int) s.size());
            for (int i = q_idx; i < nq_idx; i++) {
                while (q.size() > 0 && s[q.back()] < s[i]) q.pop_back();
                q.push_back(i);
            }
            q_idx = nq_idx;

            // Keep the deque to have elements for current window 
            while(q.size() > 0 && q.front() < idx) q.pop_front();

            res.push_back(s[q.front()]);
            
            k -= q.front() - idx;
            
            idx = q.front() + 1;

        }
        
        if (idx < s.size() - k)
            res.append(s.substr(idx, s.size()-idx));

        return res;
    }
};
```

## Optimized GeeksForGeeks Solution

```python
def maxSubseq(s, k):
    n = len(s)
    res = ""
    # Keep a separate copy of k
    to_remove = k  

    # Build the result greedily
    for i in range(n):
        while res and to_remove > 0 and res[-1] < s[i]:
            res = res[:-1]
            to_remove -= 1
        res += s[i]
    
    # Result should be of length n - k
    return res[:n - k]

if __name__ == "__main__":
    s = "zebra"
    k = 3
    print(maxSubseq(s, k))
```

## Why I used deque instead of stack. What mistake I have done

- From the question itself, we can understand remove k characters from the string to get lexigraphically to get max string. Definitly we are going to remove k character from the string. that `len(s) >= k`. Removing k characters is not based on the index or any condition, we can remove the char from any index. First I thought for the first index we have to find the max char from i to i + k index string then use this char at first and from the selected char index + 1 we have to find the next character with remaing k value. That's why I used deque to store the max char value upto current_index + remaining k and also we need to ensure we don't need to clear all values from deque and construct it from the new for each index we are at. So, I added new values to deque from where I left the deque from the previous step and removed starting index if it is less than current index, kept deque in the decreasing order to get the max value from index 0. definitly this going to work for me. But it is difficult to construct than optimized one. 

### What I learned from the above lesson.

- Deque can be better fit if there is a question with max element for every k-sized subarray like that. If you remove k then you have to search k - removed index from the current index as window for deque. so it is dynamic size. So in this case think like any other approach like stack can work here. We are going to remove the char k-times, lesser values removed k times, so we can use stack to have decreasing order and we remove the pop the stack k times.

- i.e deque is better for static k-sized window not for dynamic size, if the question is for dynamic one then think with other approach with stack like thing because here that says lexigographically that means we have to select greedy greater chars.
