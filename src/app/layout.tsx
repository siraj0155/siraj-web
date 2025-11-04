import type { Metadata } from "next";
import { Rufina } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const rufina = Rufina({
  variable: "--font-rufina",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
    <html lang="en" className={`${rufina.className} h-screen w-screen bg-[#FAFAFA]`}>
      <body className="h-screen w-screen overflow-hidden px-28 flex flex-col">
        <Header />
        <div className="flex flex-1 h-full">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
