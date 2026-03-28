# City Nooks

An interactive prototype for a third-place discovery app built for the UofT/Toronto community.

## Quick Deploy to GitHub Pages

### Step 1: Create a GitHub repo
1. Go to [github.com/new](https://github.com/new)
2. Name it `city-nooks` (or whatever you want)
3. Make it **Public**
4. Don't add any files (no README, no .gitignore)
5. Click **Create repository**

### Step 2: Push this code
Open your terminal and run these commands (replace `YOUR_USERNAME`):

```bash
cd city-nooks-deploy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/city-nooks.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The deploy workflow will run automatically on push

### Step 4: Share your link!
After ~2 minutes, your app will be live at:
```
https://YOUR_USERNAME.github.io/city-nooks/
```

> **Note:** If you named your repo something other than `city-nooks`, update the `base` field in `vite.config.js` to match your repo name.

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Demo Account
- **Email:** demo@mail.com
- **Password:** demo
