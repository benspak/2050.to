# 2050 Token - Static Landing Page

A modern, production-ready static landing page for the 2050 Token - a long-term Solana-based digital asset designed for true believers in the future of decentralized finance, technology, and generational wealth building.

## 🚀 Features

### Static Site (React + Vite + Chakra UI)
- **Modern UI/UX**: Spotify-inspired dark theme with smooth animations
- **Responsive Design**: Mobile-first approach with perfect desktop experience
- **Interactive Components**: Investment calculator, token information, community features
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Client-Side Calculations**: All calculations done in the browser
- **No Backend Required**: Fully static, deployable to any CDN

### Key Features
- **Investment Calculator**: 25-year projection tool with multiple scenarios
- **Token Information**: Contract details, tokenomics, and holder information
- **Community Integration**: Social media links, Discord, Telegram
- **Roadmap Visualization**: 25-year journey to 2050
- **Mobile Responsive**: Perfect experience on all devices
- **Fast Loading**: Optimized for performance and SEO

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Chakra UI v2** - Component library with dark theme
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **React CountUp** - Animated counters
- **React Helmet Async** - SEO management

### DevOps & Hosting
- **Render.com** - Static site hosting
- **Vercel** - Alternative hosting option
- **GitHub** - Version control

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/your-username/2050-token-static.git
cd 2050-token-static
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173

## 🚀 Deployment

### Render.com (Recommended)

1. **Connect your GitHub repository to Render**
2. **Create a new Static Site**
3. **Configure the service:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Environment: Static

### Vercel (Alternative)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

### Netlify (Alternative)

1. **Connect your GitHub repository to Netlify**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## 📁 Project Structure

```
2050.to/
├── src/                    # React source code
│   ├── components/         # React components
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                # Static assets
├── dist/                  # Build output
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## 🎨 Customization

### Theme Colors
Edit `src/main.jsx` to customize the theme:

```javascript
const theme = extendTheme({
  colors: {
    brand: {
      500: '#1DB954', // Spotify green
      // ... other shades
    }
  }
})
```

### Token Information
Update token details in `src/components/TokenInfo.jsx`:

```javascript
const tokenInfo = {
  name: '2050 Token',
  contractAddress: 'CcFvvawbp6YoBae4mUZZb5X9W5aXw8iWqqBR2eNGbonk',
  // ... other details
}
```

## 🔒 Security Features

- **Static Site**: No server-side vulnerabilities
- **Content Security Policy**: Built-in security headers
- **HTTPS Only**: Secure connections enforced
- **No Sensitive Data**: No API keys or secrets in client code

## 📊 Performance

- **Static Generation**: Pre-built HTML for fast loading
- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized and responsive images
- **SEO Optimized**: Meta tags, structured data, performance metrics
- **CDN Ready**: Can be served from any CDN

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Community**: [Discord](https://discord.gg/2050token)
- **Twitter**: [@2050token](https://twitter.com/2050token)
- **Telegram**: [t.me/token2050](https://t.me/token2050)

## 🎯 Roadmap

- [ ] Real-time price feeds (via external APIs)
- [ ] Wallet integration
- [ ] Advanced analytics dashboard
- [ ] Mobile app
- [ ] Governance platform
- [ ] DeFi integrations

---

**Hold the line. Hold the token. See you in 2050.** 🚀
