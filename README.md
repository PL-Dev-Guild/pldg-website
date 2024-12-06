# Protocol Labs Dev Guild Website

A modern, responsive landing page for the Protocol Labs Developer Guild program, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

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

## 🛠 Tech Stack

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```bash
src/
├── components/         # React components
│   ├── Hero/          # Hero section components
│   ├── Terminal/      # Terminal animation components
│   └── ...           # Other components
├── types/             # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## 🎯 Key Features

- Interactive terminal animation
- Responsive design for all devices
- Smooth scroll behavior
- Dynamic reward calculator
- Animated timeline
- Partner showcase
- FAQ section with animations
- SEO optimized

## 🔧 Configuration

### Environment Variables

```env
# Add any environment variables here
```

### Deployment

The site is configured for deployment on Vercel. Simply connect your repository and Vercel will automatically handle the build and deployment process.

## 🎨 Design System

### Colors

- Primary: Electric Blue (#3B82F6)
- Secondary: Mint (#10B981)
- Background: Black (#000000)
- Text: Steel (#94A3B8)

### Typography

- Headers: Space Grotesk
- Code: JetBrains Mono
- Body: Inter

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 🔍 SEO

- Optimized meta tags
- Open Graph support
- Twitter Card support
- Sitemap included
- Robots.txt configured

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Maintenance Notes

### Key Areas for Updates

- Timeline events in `App.tsx`
- FAQ content in `FAQSection.tsx`
- Partner information in `PartnerShowcase.tsx`
- Reward calculations in `RewardCalculator.tsx`

### Performance Considerations

- Images are stored in `/public/partners/` and `/public/logo/`
- Lazy loading is implemented for below-the-fold content
- Animations are optimized for performance

## 📄 License

This project is proprietary and confidential. All rights reserved by Protocol Labs.
