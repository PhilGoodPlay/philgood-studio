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
  title: {
    default: "PhilGood Studio | Création de sites web professionnels",
    template: "%s | PhilGood Studio",
  },

  description:
    "PhilGood Studio crée des sites web modernes, rapides et optimisés pour Google. Création de sites internet professionnels pour commerçants, artisans et entreprises en Suisse.",

  keywords: [
    "création site web",
    "création site internet",
    "agence web suisse",
    "site vitrine",
    "développeur web",
    "site internet professionnel",
    "site internet commerçant",
    "PhilGood Studio",
    "création site web Vaud",
    "création site web Lausanne",
  ],

  authors: [{ name: "PhilGood Studio" }],

  creator: "PhilGood Studio",

  metadataBase: new URL("https://philgoodstudio.ch"),

  openGraph: {
    title: "PhilGood Studio",
    description:
      "Création de sites internet modernes et performants.",
    url: "https://philgoodstudio.ch",
    siteName: "PhilGood Studio",
    locale: "fr_CH",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
