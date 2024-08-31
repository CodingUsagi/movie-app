import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { MobileHeader } from "@/components/mobile-header/mobile-header";
import MobileDetect from "mobile-detect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie DB",
  description: "Find the movies you like",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const md = new MobileDetect(navigator.userAgent);

  return (
    <html lang="en">
      <body className={`${inter.className} min-w-fit`}>
        {md.mobile() || md.tablet() ? <MobileHeader /> : <Header />}
        {children}
      </body>
    </html>
  );
}
