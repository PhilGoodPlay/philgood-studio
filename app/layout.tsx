import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.philgoodstudio.ch"),

  title: {
    default: "PhilGood Studio | Création de sites web professionnels",
    template: "%s | PhilGood Studio",
  },

  description:
    "PhilGood Studio crée des sites internet modernes, rapides et professionnels pour les commerçants, artisans et entreprises en Suisse.",

  authors: [{ name: "PhilGood Studio" }],
  creator: "PhilGood Studio",
  publisher: "PhilGood Studio",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "PhilGood Studio | Création de sites web professionnels",
    description:
      "Création de sites internet modernes, rapides et professionnels pour les commerçants, artisans et entreprises.",
    url: "https://www.philgoodstudio.ch",
    siteName: "PhilGood Studio",
    locale: "fr_CH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PhilGood Studio | Création de sites web professionnels",
    description:
      "Création de sites internet modernes, rapides et professionnels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-CH"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}