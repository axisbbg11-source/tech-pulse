# Tech Pulse - Personal Tech News Website

A modern, futuristic tech news website built with Astro. Stay updated with the latest in AI, gadgets, startups, and programming news.

## Features

- 🚀 Modern futuristic design with neon glow effects
- 🌙 Dark/Light mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast static site built with Astro
- 🎨 Custom CSS (no Tailwind dependencies)
- 📰 News article cards with category badges
- ✉️ Newsletter signup form

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download this repository
cd tech-pulse

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

---

## Deploy to GitHub Pages (Step-by-Step Guide)

### Step 1: Create a GitHub Account

If you don't already have one:
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the instructions to create your account

### Step 2: Create a New Repository

1. Log in to your GitHub account
2. Click the **+** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `tech-pulse` (or any name you prefer)
   - **Description**: My personal tech news website
   - **Public**: Select this option
   - **Initialize with**: Don't add README (we have one)
5. Click **"Create repository"**

### Step 3: Push Your Code to GitHub

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Tech Pulse website"

# Add your GitHub repository as remote
# Replace 'yourusername' with your actual GitHub username
git remote add origin https://github.com/yourusername/tech-pulse.git

# Push to GitHub
git push -u origin main
```

Refresh your GitHub repository page to see your files.

### Step 4: Enable GitHub Pages

1. In your GitHub repository, click on **Settings**
2. In the left sidebar, click on **Pages**
3. Under **Build and deployment** > **Source**, select **"GitHub Actions"**
4. The page will refresh - don't worry if you don't see anything yet

### Step 5: Add the GitHub Actions Workflow

1. In your repository, click on **Actions** tab
2. You may see some suggestions - click **"set up a workflow yourself"** or create a new workflow
3. Replace the content with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Click **"Commit changes"**
5. Add a commit message like "Add GitHub Actions workflow"
6. Click **"Commit changes"**

### Step 6: Watch the Deployment

1. Go to the **Actions** tab
2. You should see your workflow running (may say "in progress" or a checkmark)
3. Click on it to see the details
4. Wait for it to complete (usually 1-2 minutes)
5. Once complete, go to your repository's **Settings** > **Pages**
6. You should see a message like: "Your site is live at https://yourusername.github.io/tech-pulse/"

### Step 7: Update Your Site URL

If you want your site at `https://yourusername.github.io/` instead of `/tech-pulse/`:

1. Edit `astro.config.mjs` and change:
   ```javascript
   site: 'https://yourusername.github.io',
   base: '/',
   ```

2. Commit and push the changes
3. The workflow will automatically run again and deploy to the new URL

---

## Customization

### Change the Site Title/Name

Edit the files in `src/`:
- `src/layouts/Layout.astro` - Change the title
- `src/components/Header.astro` - Change the logo name
- `src/components/Footer.astro` - Change the footer branding

### Add More Articles

Edit `src/data/articles.ts` to add or modify news articles.

### Change Colors

Edit `src/styles/global.css` and modify the CSS variables at the top:

```css
:root {
  --accent-primary: #00d4ff;    /* Main cyan color */
  --accent-secondary: #ff3d71;  /* Pink accent */
  --accent-purple: #7b2ff7;     /* Purple accent */
}
```

### Add New Category Pages

Create a new file in `src/pages/` like `security.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import ArticleCard from '../components/ArticleCard.astro';
import { getArticlesByCategory, categories } from '../data/articles';

const category = categories.find(c => c.id === 'security');
const articles = getArticlesByCategory('security');
---

<Layout title="Security News">
  <!-- Use the same structure as other category pages -->
</Layout>
```

---

## Troubleshooting

### "Permission denied" when pushing?

Make sure you're logged in to GitHub CLI or use a personal access token.

### Site not building?

Check the Actions tab for error logs. Common issues:
- Node version too old - ensure Node 18+
- Missing dependencies - run `npm install`

### 404 Error on pages?

Make sure `base` in `astro.config.mjs` matches your repository name, or use `/` if deployed at root.

---

## License

MIT License - Feel free to use this for your own personal website!

---

## Credits

- Built with [Astro](https://astro.build)
- Fonts: [Orbitron](https://fonts.google.com/specimen/Orbitron) & [Outfit](https://fonts.google.com/specimen/Outfit)
- Images: [Unsplash](https://unsplash.com)