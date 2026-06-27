import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/features/landing-page/components/AOSInit";
import Navbar from "@/features/landing-page/components/navbar/Navbar";
import Footer from "@/features/landing-page/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foody - One-Stop Online Store",
  description:
    "Foody is a one-stop online store for all your grocery needs. We provide fresh organic groceries and cereals to facilitate your healthy lifestyle with the best prices and quality.",
  icons: {
    icon: "./images/logo/" /* to be added */,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col ">
        <Navbar />
        <AOSInit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
