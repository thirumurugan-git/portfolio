<!-- Blog title: Deploying Vue App to GitHub Pages -->

## Steps to Deploy a Vue App to GitHub Pages

- Created the repo in the GitHub console.
- Cloned it to the local machine.  
- Ran `npm init vue@latest` inside the cloned directory.  
  - Entered `.` for current directory when prompted.  
  - Selected `yes` when asked to override.  
  - Chose Vue options: ESLint, SPA, and routing.  
- Pushed the initial Vue project to the `main` branch.

### GitHub Pages Configuration

- On GitHub:
  - Go to the **Settings** page of your blog repository.
  - Under the **Pages** tab, set the **main** branch as the deployment source.
  - Click **Save**.

> Page will go live, but no resources are downloaded!

### Fixing Resource Paths

By default, Vite expects static assets at the root (`/`). You need to tell it to look under your repo path:

```ts
// vite.config.ts
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
````

### Automating Deployment

You should push only the built `dist/` folder to a separate branch (`gh-pages`). Use the `gh-pages` npm package:

```bash
npm install --save-dev gh-pages
npm run build
```

Add this to your `package.json` scripts:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

* A new branch `gh-pages` will be created and pushed to the remote.
* Change your GitHub Pages setting to use the `gh-pages` branch now.

### Manual Alternative

If you don't want to install the `gh-pages` package, you can use:

```bash
git subtree push --prefix dist origin gh-pages
```

> ⚠️ Manual deployment may result in conflicts or issues. Recommended to use `gh-pages` package for consistency.
