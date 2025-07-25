# Deployment Guide - 2050 Token Static Site

This guide covers deploying the 2050 Token static site to various platforms.

## 🚀 Quick Deploy Options

### Render.com (Recommended)

1. **Connect Repository**
   - Go to [render.com](https://render.com)
   - Connect your GitHub repository
   - Select "Static Site" as the service type

2. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Static

3. **Deploy**
   - Click "Create Static Site"
   - Your site will be available at `https://your-app-name.onrender.com`

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `dist`

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

3. **Deploy**
   - Netlify will automatically build and deploy your site

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Build Output

The build process creates a `dist/` directory containing:
- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and other assets
- All static assets optimized for production

## 🌐 Custom Domain

### Render.com
1. Go to your site settings in Render dashboard
2. Click "Custom Domains"
3. Add your domain (e.g., `2050.to`)
4. Update DNS records as instructed

### Vercel
1. Go to your project settings in Vercel dashboard
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to your site settings in Netlify dashboard
2. Click "Domain management"
3. Add custom domain
4. Update DNS records as instructed

## 🔒 HTTPS

All platforms automatically provide HTTPS certificates for your custom domains.

## 📊 Performance

The static site is optimized for:
- **Fast Loading**: Pre-built HTML and optimized assets
- **SEO**: Meta tags and structured data
- **Mobile**: Responsive design
- **Accessibility**: WCAG compliant

## 🛠 Troubleshooting

### Build Failures
- Check Node.js version (requires 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for syntax errors in React components

### Deployment Issues
- Verify build command and output directory
- Check platform-specific logs
- Ensure all dependencies are in `package.json`

### Custom Domain Issues
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check platform-specific domain settings

## 📞 Support

- **Render**: [docs.render.com](https://docs.render.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)

---

**Hold the line. Hold the token. See you in 2050.** 🚀
