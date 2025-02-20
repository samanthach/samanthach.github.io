## Deploying the Project

### Step 0: Set up
Delete the local gh-pages branch, then pull from main:
```bash
git checkout main
git branch -D gh-pages
git pull
```
### Step 0.5: Implement Changes

### Step 1: Add and Commit Your Changes (optional for now)
- Work on the main branch.
- Github serves files from the gh-pages branch (dist === root folder)
```bash
git add .
git commit -m "Update source files"
```

### Step 2: Push Changes to the Main Branch (optional for now)
```bash
git push origin main
```

### Step 3: Build the Project (Creates the `dist/` Folder locally)
```bash
npm run build
```

### Step 4: Deploy the `dist/` Folder to the `gh-pages` Branch
```bash
npm run deploy
```
**tip**: check for errors, you should see  this success message if deploy was successful:
```bash
22:15:40 [build] Complete!

> dante-astro-theme@0.0.1 postbuild
> touch dist/.nojekyll


> dante-astro-theme@0.0.1 deploy
> gh-pages -d dist

Published
```

### Manually Add `.nojekyll`
If for some reason `.nojekyll` is not being deployed properly, you can manually add it to the `gh-pages` branch:
```bash
git checkout gh-pages
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll to root of gh-pages"
git push origin gh-pages
```
**Note**: nojekyll is necessary to prohibit github from ignoring file paths that start with underscores.

**tip**:
You might get a warning when trying to push this file to gh-pages:
```bash
 ! [rejected]        gh-pages -> gh-pages (fetch first)
error: failed to push some refs to 'https://github.com/samanthach/samanthach.github.io.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
You can delete the gh-pages branch locally and fetch it from the repo again, then add the nojekyll file.
