import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant, Noto_Sans as Noto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});
const noto = Noto({
  variable: "--font-noto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophie Wirth - Art Portfolio",
  description: "Portfolio of artist Sophie Wirth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${noto.variable}`}>
        {children}
      </body>
    </html>
  );
}
