import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

let title = "insta-appz";
let description = "build apps with Gemini";
let url = "https://insta-appz.vercel.app";
let ogimage = "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg";
let sitename = "https://apps.jessejesse.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </html>
  );
}
