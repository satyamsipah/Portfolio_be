import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Satyam Maddheshiya | Biochemical Engineer & Full-Stack Developer',
  description:
    'Personal portfolio of Satyam Maddheshiya — B.Tech Biochemical Engineering student at HBTU Kanpur. Full-stack developer (MERN, Next.js), AI explorer, and bioprocess researcher.',
  keywords: [
    'Satyam Maddheshiya',
    'Biochemical Engineer',
    'Full Stack Developer',
    'MERN Stack',
    'Next.js',
    'HBTU Kanpur',
    'Bioprocess Engineering',
    'Software Developer',
    'AI',
    'Portfolio',
  ],
  authors: [{ name: 'Satyam Maddheshiya', url: 'https://github.com/satyamsipah' }],
  creator: 'Satyam Maddheshiya',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Satyam Maddheshiya | Biochemical Engineer & Full-Stack Developer',
    description:
      'Building at the intersection of biology, code, and intelligent systems. From fermentation labs to production databases.',
    siteName: 'Satyam Maddheshiya Portfolio',
    images: [
      {
        url: '/images/hero-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Satyam Maddheshiya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satyam Maddheshiya | Biochemical Engineer & Full-Stack Developer',
    description: 'Building at the intersection of biology, code, and intelligent systems.',
    images: ['/images/hero-photo.jpg'],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://satyam-portfolio.vercel.app'),
}

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    var isDark = theme ? theme === 'dark' : true;
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
