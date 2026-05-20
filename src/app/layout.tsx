import type { Metadata, Viewport } from 'next';
import { Inter, Poppins, Sora, Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { StructuredData } from '@/components/layout/StructuredData';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#070B16' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'best paramedical college in Shadnagar',
    'paramedical college Shadnagar',
    'paramedical courses in Telangana',
    'DMLT college in Rangareddy',
    'medical lab technician courses Telangana',
    'healthcare education Telangana',
    'DMLT Shadnagar',
    'DMPHA Telangana',
    'Anesthesia Technician course',
    'ECG Technician course',
    'Ophthalmology diploma',
    'Medical Imaging Technician',
    'Operation Theatre Technician',
    'Cardiac Lab Technician',
    'Telangana Paramedical Board',
    'Sri Sai Paramedical College',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${jakarta.variable} ${dm.variable}`}
    >
      <body className="font-sans antialiased bg-white dark:bg-[#070B16] text-ink dark:text-white overflow-x-hidden">
        <ThemeProvider>
          <StructuredData />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
