import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import PopUp from "@/components/home/pop-up";

const font1 = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font1",
});

const font2 = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font2",
});

export const metadata: Metadata = {
  title: "Globesway Immigration",
  description: "Immigration services and consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-5XGX7LJ5NS`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5XGX7LJ5NS');
          `}
        </Script></head>

        
      <body className={`${font1.variable} ${font2.variable} bg-white`}>
        <Header />
        {children}
        <PopUp />
        <Footer footer={footer} />
      </body>
    </html>
  );
}