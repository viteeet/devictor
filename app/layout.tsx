import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devictor.com.br'),
  title: {
    default: 'DEVICTOR - Victor Hugo | Desenvolvedor Full Stack',
    template: '%s | DEVICTOR'
  },
  description: 'Programação inteligente, automação e desenvolvimento sob medida. Desenvolvimento web, automações Python, dashboards e soluções digitais personalizadas.',
  keywords: ['desenvolvedor', 'full stack', 'Next.js', 'React', 'Python', 'automação', 'web development'],
  authors: [{ name: 'Victor Hugo' }],
  creator: 'Victor Hugo',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://devictor.com.br',
    title: 'DEVICTOR - Victor Hugo | Desenvolvedor Full Stack',
    description: 'Programação inteligente, automação e desenvolvimento sob medida.',
    siteName: 'DEVICTOR',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEVICTOR - Victor Hugo | Desenvolvedor Full Stack',
    description: 'Programação inteligente, automação e desenvolvimento sob medida.',
    creator: '@victorhugo',
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-dark text-gray-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Victor Hugo',
              jobTitle: 'Full Stack Developer',
              url: 'https://devictor.com.br',
              sameAs: [
                'https://github.com/victorhugo',
                'https://linkedin.com/in/victorhugo',
              ],
              knowsAbout: [
                'Web Development',
                'Next.js',
                'React',
                'Python',
                'Automation',
                'Full Stack Development',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

