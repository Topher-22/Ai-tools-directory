import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Tools Directory | Find the Perfect AI Tool for Your Workflow",
    template: "%s | AI Tools Directory",
  },
  description:
    "Discover and compare the best AI tools and SaaS products. Honest reviews, pricing transparency, and expert recommendations to help you choose the perfect AI solution.",
  keywords: [
    "AI tools",
    "SaaS directory",
    "AI software",
    "productivity tools",
    "AI comparison",
    "tool reviews",
  ],
  authors: [{ name: "AI Tools Directory" }],
  creator: "AI Tools Directory",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitoolsdirectory.com",
    title: "AI Tools Directory | Find the Perfect AI Tool",
    description:
      "Discover and compare the best AI tools. Honest reviews, pricing transparency, and expert recommendations.",
    siteName: "AI Tools Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Directory | Find the Perfect AI Tool",
    description:
      "Discover and compare the best AI tools. Honest reviews, pricing transparency, and expert recommendations.",
    creator: "@aitoolsdir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
