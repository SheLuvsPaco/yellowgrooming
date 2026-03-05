import type { Metadata } from "next";
import { Flavors, Gugi, Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import MobileNavigation from "@/components/layout/MobileNavigation";
import Logo from "@/components/layout/Logo";

const flavors = Flavors({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-flavors",
  display: "swap",
});

const gugi = Gugi({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gugi",
  display: "swap",
});

const firaSans = Fira_Sans_Condensed({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fira-sans",
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Polina Tsvetkova Grooming Studio - Професионална грижа за домашни любимци",
  description:
    "Професионални услуги за груминг на кучета и котки в София. Миене, подстригване, ноктопочистване и СПА пакет. Резервирайте час онлайн!",
  keywords: [
    "груминг",
    "куче",
    "котка",
    "миене",
    "подстригване",
    "грижа за домашни любимци",
    "Sophia",
    "Polina Tsvetkova",
    "СПА за кучета",
  ],
  authors: [{ name: "Polina Tsvetkova Grooming Studio" }],
  openGraph: {
    title: "Polina Tsvetkova Grooming Studio - Професионална грижа за домашни любимци",
    description:
      "Професионални услуги за груминг на кучета и котки в София. Резервирайте час онлайн!",
    type: "website",
    locale: "bg_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polina Tsvetkova Grooming Studio - Професионална грижа за домашни любимци",
    description:
      "Професионални услуги за груминг на кучета и котки в София. Резервирайте час онлайн!",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${flavors.variable} ${gugi.variable} ${firaSans.variable}`}
      lang="bg"
    >
      <body className="font-sans antialiased">
        <Logo />
        <Navigation />
        <MobileNavigation />
        {children}
      </body>
    </html>
  );
}
