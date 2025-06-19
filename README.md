# Think Smarter Group Website

A modern, responsive website for Think Smarter Group - a technology solutions and consulting company specializing in education, skills development, and employability sectors.

## 🚀 About

Think Smarter Group provides professional technology solutions and consulting services for modern businesses. The company offers expert advisory, training, and tech solutions focused on Education, Skills, and Employability sectors.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Service Showcase**: Detailed presentation of advisory, product/technology, and training services
- **Investment Portfolio**: Showcase of company investments with filtering by sector
- **Team Section**: Introduction to key team members
- **Contact Form**: Integrated contact form with email functionality
- **Dark Mode Support**: Built-in theme switching capability
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4.1 with custom animations
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form with Zod validation
- **Email**: React Email with Resend integration
- **Icons**: Lucide React and React Icons
- **Analytics**: Vercel Analytics
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

```
thinksmartergroup-website/
├── app/                    # Next.js app directory
│   ├── data/              # Static data files
│   ├── images/            # Image assets
│   ├── investments/       # Investment portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── email/            # Email templates
│   ├── feature/          # Feature components
│   ├── page-sections/    # Page section components
│   └── ui/               # UI components
├── lib/                  # Utility functions and interfaces
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thinksmartergroup-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Styling
The project uses Tailwind CSS with custom design tokens. Main styling configurations can be found in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

### Content
- **Services**: Edit `app/services/page.tsx` to modify service offerings
- **Investments**: Update `app/data/investments.ts` to manage investment portfolio
- **Team**: Modify team member data in the team section components
- **Contact**: Update contact form configuration in `components/page-sections/contact.tsx`

## 📧 Email Integration

The contact form integrates with Resend for email delivery. Configure your Resend API key in the environment variables to enable email functionality.

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Think Smarter Group.

## 📞 Contact

For questions about this project, please contact Think Smarter Group through the website contact form.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
