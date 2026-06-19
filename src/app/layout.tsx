import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peakmodo.com"),
  title: {
    default: "PeakModo® — World's Purest Shilajit",
    template: "%s | PeakModo",
  },
  description:
    "PeakModo delivers 100% authentic, lab-tested Shilajit resin hand-harvested from 3000-5000m altitudes, free from additives, chemicals, and processing. Only the purest form. Only real results.",
  openGraph: {
    title: "PeakModo® — World's Purest Shilajit",
    description:
      "100% authentic, lab-tested Shilajit resin hand-harvested from 3000-5000m altitudes.",
    siteName: "PeakModo",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
