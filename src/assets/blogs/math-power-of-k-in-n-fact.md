## Solution

- URL - `https://www.geeksforgeeks.org/problems/power-of-k-in-n-where-k-may-be-non-prime4206/1`

```
class Solution {
  public:
    // int maxKPower(int n, int k) {
    //     // code here
        
    // }
    int findPowerOfP(int n, int p) 
    { 
        int count = 0; 
        int r=p; 
        while (r <= n) { 
      
            // calculating floor(n/r) 
            // and adding to the count 
            count += (n / r); 
      
            // increasing the power of p 
            // from 1 to 2 to 3 and so on 
            r = r * p; 
        } 
        return count; 
    } 
      
    // returns all the prime factors of k 
    vector<pair<int, int> > primeFactorsofK(int k) 
    { 
        // vector to store all the prime factors 
        // along with their number of occurrence 
        // in factorization of k 
        vector<pair<int, int> > ans; 
      
        for (int i = 2; k != 1; i++) { 
            if (k % i == 0) { 
                int count = 0; 
                while (k % i == 0) { 
                    k = k / i; 
                    count++; 
                } 
      
                ans.push_back(make_pair(i, count)); 
            } 
        } 
        return ans; 
    } 
      
    // Returns largest power of k that 
    // divides n! 
    int maxKPower(int N, int K) 
    { 
        vector<pair<int, int> > vec; 
        vec = primeFactorsofK(K); 
        int ans = INT_MAX; 
        for (int i = 0; i < vec.size(); i++) 
      
            // calculating minimum power of all 
            // the prime factors of k 
            ans = min(ans, findPowerOfP(N,  
                  vec[i].first) / vec[i].second); 
      
        return ans; 

    }
};
```

- I didn't solved just copied. Need to study.
