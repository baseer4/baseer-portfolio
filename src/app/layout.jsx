import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Baseer Uddin | Portfolio",
  description: "Minimal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#393E46] text-white antialiased">
        <div className="max-w-3xl mx-auto px-6">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
