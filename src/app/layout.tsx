import type { Metadata } from "next";
import { Caveat, Monomaniac_One, Rufina } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/providers/Providers";

const rufina = Rufina({
  variable: "--font-rufina",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sirajudheen | Software Developer",
  description:
    "Portfolio of Sirajudheen – building reliable web applications with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rufina.variable} ${caveat.variable}`}>
      <body className="min-h-screen container bg-white text-black">
        <Providers>
          <Header />
          <Sidebar />
          <main className="md:ml-40! ">
            <div className="container mx-auto">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
