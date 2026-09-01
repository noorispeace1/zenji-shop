import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/src/component/Preloader";
import CustomCursor from "@/src/component/CustomCursor";

// Heading & Brand styling font (Luxury/Modern Serif)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Clean body font (Modern UI Sans)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zenji Shop | Premium Lifestyle & Fashion",
    template: "%s | Zenji Shop",
  },
  description:
    "Discover curated collections, trendsetting fashion, and premium lifestyle essentials at Zenji Shop.",
  keywords: ["fashion", "e-commerce", "lifestyle", "zenji shop", "clothing", "accessories"],
  openGraph: {
    title: "Zenji Shop | Premium Lifestyle & Fashion",
    description: "Curated collections, trendsetting fashion, and premium lifestyle essentials.",
    siteName: "Zenji Shop",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-black text-white selection:bg-red-600 selection:text-white relative">
        <CustomCursor />
        <Preloader />
        {children}
      </body>
    </html>
  );
}