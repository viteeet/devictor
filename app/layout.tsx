import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

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
    default: 'VCTR — Estúdio de Engenharia Digital',
    template: '%s | VCTR',
  },
  description: 'Sistemas escaláveis. Arquitetura de dados. Produtos digitais. Frontend, backend, automação e infraestrutura.',
  keywords: ['engenharia digital', 'VCTR', 'Victor Hugo', 'Next.js', 'React', 'Python', 'automação', 'APIs', 'dados'],
  authors: [{ name: 'Victor Hugo' }],
  creator: 'Victor Hugo',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'es_ES'],
    url: 'https://devictor.com.br',
    title: 'VCTR — Estúdio de Engenharia Digital',
    description: 'Sistemas escaláveis. Arquitetura de dados. Produtos digitais.',
    siteName: 'VCTR',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCTR — Estúdio de Engenharia Digital',
    description: 'Sistemas escaláveis. Arquitetura de dados. Produtos digitais.',
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
  width: 'device-width',
  initialScale: 1,
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
                'https://github.com/viteeet',
                'https://br.linkedin.com/in/victor-hugo-8785451b9',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

