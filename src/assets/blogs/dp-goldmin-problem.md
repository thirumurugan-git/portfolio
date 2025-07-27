## My solution

- URL - `https://www.geeksforgeeks.org/problems/gold-mine-problem2608/1`

```
class Solution {
  public:
    bool withinBounds(vector<vector<int>>& mat, int i, int j) {
        return 0 <= i && i < mat.size() && j >= 0 && j < mat[0].size();
    }
    
    int traverse(vector<vector<int>>& mat, int i, int j, vector<vector<int>>& dp) {
        
        if(dp[i][j] != -1) return dp[i][j];
        
        int maxi = 0;
        
        if(withinBounds(mat, i-1, j+1)) {
            maxi = max(maxi, traverse(mat, i-1, j+1, dp));
        }
        
        if(withinBounds(mat, i, j+1)) {
            maxi = max(maxi, traverse(mat, i, j+1, dp));
        }
        
        if(withinBounds(mat, i+1, j+1)) {
            maxi = max(maxi, traverse(mat, i+1, j+1, dp));
        }
        
        dp[i][j] = maxi + mat[i][j];
        
        return dp[i][j];
    }
  
    int maxGold(vector<vector<int>>& mat) {
        // code here
        vector<vector<int>> dp(mat.size(), vector<int>(mat[0].size(), -1));
        int maxi = 0;
        for(int i=0; i < mat.size(); i++) {
            maxi = max(maxi, traverse(mat, i, 0, dp));
        }
        return maxi;
    }
};
```