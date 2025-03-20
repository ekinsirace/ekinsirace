import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ekin Sıraçe - Yaşam Koçu | NLP | İlişki Danışmanı",
  description:
    "Yaşam koçluğu, NLP, ilişki ve evlilik danışmanlığı, tütün bağımlılığını bırakma desteği ve yas süreci danışmanlığı hizmetleriyle hayatınızı değiştirmek için buradayım!",
  keywords: [
    "yaşam koçu",
    "NLP koçluğu",
    "ilişki danışmanı",
    "evlilik terapisi",
    "tütün bağımlılığı bırakma",
    "yas danışmanlığı",
    "bireysel gelişim",
    "travma iyileşme",
  ],
  authors: [{ name: "Ekin Sıraçe" }],
  robots: "index, follow",
  openGraph: {
    title: "Ekin Sıraçe - Yaşam Koçu | NLP | İlişki Danışmanı",
    description:
      "Kendi potansiyelinizi keşfetmek, ilişkilerinizi güçlendirmek, tütün bağımlılığından kurtulmak ve yas sürecini sağlıklı atlatmak için profesyonel destek alın.",
    url: "https://ekinsirace.com",
    type: "website",
    images: [
      {
        url: "/ekinsirace.jpeg",
        width: 1200,
        height: 630,
        alt: "Ekin Sıraçe Yaşam Koçu",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://ekinsirace.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
