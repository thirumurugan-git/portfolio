## My solution

- URL - https://www.geeksforgeeks.org/problems/sum-of-subarray-minimum/1

```
#include <stack>
#include <vector>

using namespace std;

class Solution {
  public:
    int sumSubMins(vector<int> &arr) {
        // code here
        stack<int> stack_p;
        stack<int> stack_n;
        vector<int> nse_p(arr.size(), -1);
        vector<int> nse_n(arr.size(), -1);

        for(int i = 0; i < arr.size(); i++) {
            while(stack_p.size() > 0 && arr[stack_p.top()] > arr[i])
                stack_p.pop();
            nse_p[i] = (stack_p.size() > 0) ? stack_p.top() : -1;
            stack_p.push(i);
        }

        for(int i = arr.size() - 1; i > -1; i--) {
            while(stack_n.size() > 0 && arr[stack_n.top()] >= arr[i])
                stack_n.pop();
            nse_n[i] = (stack_n.size() > 0) ? stack_n.top() : arr.size();
            stack_n.push(i);
        }

        int sum = 0;
        for (int i = 0; i < arr.size(); i++) {
            sum += (i - nse_p[i]) * (nse_n[i] - i) * arr[i];
        }

        return sum;
    }
};
```

- For each element we need to find how many subarray we can form using this current element as minimum. So we need to find the next smallest element from right and left as well. So for that subarray size from left min and right min for current value, the current value is the minimum for the subarray. Number of subarray's we can form is (i - left_min) * (right_min - i). We can expand the subarray to the right if we find same value in the right. For left, we can't expand else we endup with calculating duplicated subarray's. For example,

1 x x 1 x x x 1

for the middle '1' value, we can expand it to left and right as below
1 [x x 1 x x 1]

If we are calculating middle '1' as below then we are endup with duplicate subarray calculation.

[1 x x 1 x x 1] -> One of the subarray with middle '1' as minimum value is [1 x x 1] x x 1 and also one of the subarray with first '1' as minimum value is [1 x x 1] x x 1 here duplicate subarray calculation occurs if same element is identified. So we will expand the subarray upto '> curr_val' and right to '>= curr_val'.
