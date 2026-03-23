import type { Metadata } from "next";
import { PT_Sans_Narrow, PT_Serif } from "next/font/google";
import "./globals.css";

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cancer Institute (WIA) — Research",
  description:
    "Explore groundbreaking cancer research at Cancer Institute (WIA) Adyar — India's first comprehensive cancer center, pioneering oncology since 1954.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSansNarrow.variable} ${ptSerif.variable} ${ptSansNarrow.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
