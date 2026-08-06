import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "./components/ScrollRestoration";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-vietnam",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xartech",
  description: "Modern digital solutions by Xartech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${vietnam.variable} ${geistMono.variable} antialiased`}>
        <ScrollRestoration />
        <Navbar />
        <div className="pt-[72px]">
        {children}
        </div>
   
    <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"></script>
<script src="https://files.bpcontent.cloud/2026/06/22/03/20260622031454-XJ7XACCU.js" defer></script>
    
      </body>
    </html>
  );
}