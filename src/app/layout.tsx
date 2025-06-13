import type { Metadata } from "next";
import { Cinzel, Fauna_One } from "next/font/google";
import "./globals.css";
import OGImage from "../../public/og-image.png";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const faunaOne = Fauna_One({
  variable: "--font-fauna-one",
  weight: ["400"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Sophie Wirth - Art Portfolio",
  description: "Portfolio of artist Sophie Wirth.",
  metadataBase: new URL('https://s-wirth.com'),
    keywords: ["Sophie Wirth", "Portfolio", "Art", "Artist Portfolio"],
  openGraph: {
    images: OGImage.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${cinzel.variable} ${faunaOne.variable}}`}>
        {children}
      </body>
    </html>
  );
}
