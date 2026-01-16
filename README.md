# भोजपुर राज्य (Bhojpur Rajya) Website

A modern, interactive website for the Bhojpur Rajya movement - advocating for the creation of a separate state comprising 28 districts from Bihar, Uttar Pradesh, and Jharkhand.

## 🌟 Features

### Core Components
- **Hero Section** - Animated landing with 3D logo effects, glassmorphism design, and tricolor elements
- **Interactive Map** - SVG-based map with 28 districts featuring hover tooltips and full-screen viewer
- **Vision & Objectives** - Detailed movement goals with elegant typography using Eczar font
- **Districts Showcase** - Tabbed interface displaying all 28 districts grouped by state
- **Constitutional Basis** - Legal and historical foundation for the movement
- **Registration Form** - Multilingual form (Hindi/English) with validation for joining the movement
- **Floating CTA Button** - Persistent call-to-action that appears on scroll

### Technical Highlights
- ✅ **Next.js 16.1.1** with Turbopack for blazing-fast development
- ✅ **React 18.3.1** with client-side components
- ✅ **Tailwind CSS v4** with custom linear gradients
- ✅ **Framer Motion 12.26.2** for smooth animations
- ✅ **Google Fonts (Eczar)** for authentic typography
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Complete Open Graph, Twitter Cards, PWA manifest
- ✅ **Accessibility** - Semantic HTML and ARIA labels

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bhojpur_rajya
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
bhojpur_rajya/
├── app/
│   ├── bhojpur-rajya/
│   │   ├── components/
│   │   │   ├── Hero.tsx                    # Landing hero section
│   │   │   ├── Vision.tsx                  # Vision statement
│   │   │   ├── Objectives.tsx              # Movement objectives
│   │   │   ├── WhyNeeded.tsx              # Rationale section
│   │   │   ├── StateInfo.tsx              # State information
│   │   │   ├── BhojpurMap3D.tsx           # Interactive district map
│   │   │   ├── Districts.tsx              # 28 districts showcase
│   │   │   ├── ConstitutionalBasis.tsx    # Legal foundation
│   │   │   ├── MovementStrategy.tsx       # Strategy section
│   │   │   ├── RegistrationForm.tsx       # Join form with validation
│   │   │   ├── SloganBanner.tsx           # Animated slogan
│   │   │   └── FloatingJoinButton.tsx     # Floating CTA
│   │   └── data/
│   │       └── content.ts                  # Content data
│   ├── layout.tsx                          # Root layout with SEO
│   ├── page.tsx                            # Main page
│   └── globals.css                         # Global styles
├── public/
│   ├── logo.png                            # Primary logo
│   ├── logo1.png                           # Secondary logo
│   ├── map.png                             # Map image
│   ├── map.svg                             # Map SVG
│   ├── map1.png                            # Background map
│   ├── manifest.json                       # PWA manifest
│   └── robots.txt                          # SEO robots
├── next.config.ts                          # Next.js configuration
├── tailwind.config.ts                      # Tailwind configuration
└── tsconfig.json                           # TypeScript configuration
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange (`#f97316`) - Represents courage and sacrifice
- **Secondary**: Green (`#16a34a`) - Represents prosperity
- **Accent**: Red (`#dc2626`) - Represents strength
- **Tricolor**: Saffron, White, Green (Indian flag colors)

### Typography
- **Primary Font**: Eczar (Google Font) - weights 400-800
- **Headings**: Bold Eczar for impact
- **Body**: System fonts for readability

### Animations
- Floating logos with 3D transforms
- Smooth scroll animations
- Hover effects on interactive elements
- Pulse effects on CTAs
- Fade-in animations for sections

## 🗺️ Districts Covered

### Bihar (9 districts)
Bhojpur, Buxar, Kaimur, Rohtas, Aurangabad, Gaya, Nawada, Arwal, Jehanabad

### Uttar Pradesh (17 districts)
Varanasi, Chandauli, Ghazipur, Ballia, Jaunpur, Azamgarh, Mau, Bhadohi, Mirzapur, Sonbhadra, Prayagraj, Pratapgarh, Kaushambi, Fatehpur, Amethi, Raebareli, Sultanpur

### Jharkhand (2 districts)
Palamu, Garhwa

## 📱 Form Validation

The registration form includes:
- **Name**: Required, text input
- **District**: Required, dropdown with all 28 districts
- **Mobile**: Required, 10-digit validation (starts with 6-9)
- **Email**: Optional, email format validation
- Error messages in Hindi
- Success animation with auto-reset

## 🔍 SEO Configuration

- **Title**: भोजपुर राज्य (Bhojpur Rajya) - एक नए राज्य की मांग
- **Meta Description**: Comprehensive SEO with 13+ keywords
- **Open Graph**: Full social media preview support
- **Twitter Cards**: Large image cards configured
- **PWA**: Manifest file with theme colors
- **Sitemap**: Ready for implementation
- **Robots.txt**: Configured for crawlers

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (React 18.3.1)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.26.2
- **Icons**: Lucide React
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Fonts**: Google Fonts (Eczar), Geist

## 📝 Development Notes

### Tailwind v4 Syntax
This project uses Tailwind CSS v4, which has updated syntax:
- `bg-linear-to-r` instead of `bg-gradient-to-r`
- `shrink-0` instead of `flex-shrink-0`

### Port Configuration
The development server runs on port **3001** (3000 is typically in use).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Bhojpur Rajya movement supporters
- Open source community
- Next.js and React teams

---

**Note**: This is a frontend implementation. Backend integration for form submissions is pending.
