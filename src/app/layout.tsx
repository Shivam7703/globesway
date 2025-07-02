import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'; // Import the Berkshire Swash font
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import { footer } from '@/data/homeData';

// Import the font with proper subsets
const font1 = Plus_Jakarta_Sans({
  weight: ["200" , "300" , "400" , "500" , "600" , "700" , "800" ], // Adjust weights if needed
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font1"
});

const font2 = DM_Sans({
  weight: ["200" , "300" , "400" , "500" , "600" , "700" , "800" ], // Adjust weights if needed
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font2"
});


export const metadata: Metadata = {
  title: ' GLOBESWAY IMMIGRATION',
  description: 'Developed in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font1.variable} ${font2.variable} bg-white`}>
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
