import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'INFA - Institut National de Formation Administrative',
    template: '%s | INFA Madagascar',
  },
  description: "Forger l'élite pour transformer l'État. L'INFA forme les futurs cadres administratifs de Madagascar avec excellence et intégrité.",
  keywords: [
    'INFA',
    'formation',
    'administration',
    'Madagascar',
    'école',
    'cadre',
    'état',
    'fonction publique',
  ],
  authors: [{ name: 'INFA Madagascar' }],
  openGraph: {
    title: 'INFA - Institut National de Formation Administrative',
    description: "Forger l'élite pour transformer l'État",
    type: 'website',
    locale: 'fr_MG',
    siteName: 'INFA Madagascar',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#007E5E" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-infa-fond text-infa-texte">
        {/* ✅ Wrapper Provider (Client Component) */}
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}