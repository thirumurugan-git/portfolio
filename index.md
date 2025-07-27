<!--  -->

- Created the repo in the github console.
- Cloned it in the local. 
- Ran `npm init vue@latest` on the cloned directory. Asked for github directory, so entered `.` as current directory. Asked for override then entered `yes`. Created the vue project with eslint, spa and routing.
- After init pushed the changes to the `main` branch.
- On the github console. Went settings page of the current blog repo. On the `pages` tab, set current branch `main` as deploy branch and clicked `save` button.
- Page is live but no resources are downloaded.
- Because, vite config needs the base path, because it searches the resources from `/` root. So, need to change the base to our repo path i.e `/your-repo/`.

```
export default defineConfig({

  base: "/portfolio/",

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
```

- But now we need to have the seperate repo to only have `dist` changes. This requires manual creation of `gh-pages` branch and push the `dist` changes into the branch. So there is a module `gh-pages`, we will install them and use it for push the dist changes on `gh-pages` branch.

- `npm install --save-dev gh-pages`
- `npm run build`
- `npm run deploy` (set `deploy` as `gh-pages -d dist` in package.json script)

- After this change, there is a new branch `gh-pages` created on the remote repo.

- Now the change the repo settings to use `gh-pages` branch as deployment branch.

- Note: If `gh-pages` is not installed we need to push the dist changes manually using following command `git subtree push --prefix dist origin gh-pages`. There might you face some issues if you do it manually.
