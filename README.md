
## Deploying the Project 

# Step 1: Add and commit your changes (optional, saves your work)
git add .
git commit -m "Update source files"

# Step 2: Push changes to the main branch (optional)
git push origin main

# Step 3: Build the project (creates the `dist/` folder)
npm run build

# Step 4: Deploy the `dist/` folder to the `gh-pages` branch
npm run deploy

# Manually Add .nojekyll (if needed)
If for some reason .nojekyll is not being deployed properly, you can manually add it to the gh-pages branch:

git checkout gh-pages

touch .nojekyll

git add .nojekyll
git commit -m "Add .nojekyll to root of gh-pages"
git push origin gh-pages
