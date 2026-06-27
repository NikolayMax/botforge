import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import YandexMetrika from "./components/YandexMetrika";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BotForge — Разработка ботов для Telegram и MAX под ключ",
  description:
    "Закажите разработку бота для Telegram, MAX и других платформ. Senior Frontend-разработчик с 11+ лет опыта. Node.js, TypeScript, React, CI/CD. Гарантия, поддержка, адекватные цены.",
  keywords: [
    "разработка ботов",
    "заказать telegram бота",
    "разработка telegram бота",
    "бот для MAX",
    "создать бота макс",
    "чат бот на заказ",
    "разработчик ботов",
    "заказать бота под ключ",
  ],
  icons: {
    icon: '/max-favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "BotForge — Разработка ботов для Telegram и MAX",
    description:
      "Разрабатываю ботов для Telegram, MAX, Discord и AI под ключ. Node.js, TypeScript, CI/CD.",
    type: "website",
    locale: "ru_RU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка ботов под ключ",
  description:
    "Разработка Telegram ботов, ботов для MAX, Discord, AI-ассистентов и торговых роботов. Полный цикл: от идеи до поддержки.",
  provider: {
    "@type": "Person",
    name: "Senior Frontend Developer",
    jobTitle: "Разработчик ботов",
  },
  areaServed: {
    "@type": "City",
    name: "Москва",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Типы ботов",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Telegram Bot",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MAX Bot",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Discord Bot",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}
