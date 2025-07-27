## My solution

- URL - `https://www.geeksforgeeks.org/problems/trail-of-ones3242/1`

```
#include <math.h>

class Solution {
  public:
    int countConsec(int n) {
        int one = 1;
        int zero = 1;
        for(int i = 1; i < n; i++) {
            zero += one;
            one = zero - one;
        }

        return pow(2, n) - (zero + one);
    }
};
```

- We are going to count the non-consecutive ones formats then going to minus it from all combinations.

Need to discuss why we are not going to calculate the consecutive 1's count rather than non-consecutive.