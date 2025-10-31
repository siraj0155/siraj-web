import type { Metadata } from "next";
import { Rufina } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rufina = Rufina({
  variable:"--font-rufina",
  subsets:["latin"],
  weight:["400","700"],
  display:"swap",
})

export const metadata: Metadata = {
  title: "Sirajudheen | Software Developer",
  description: "Portfolio of Sirajudheen – building reliable web applications with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rufina.className} h-full w-full bg-amber-100`}>
      <body
        className="h-full w-full "
      >
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
