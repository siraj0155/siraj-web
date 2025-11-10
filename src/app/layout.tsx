import type { Metadata } from "next";
import { Caveat, Rufina } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/providers/Providers";
import Loader from "@/components/Loader";

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
      <body className=" container bg-white text-black">
        <Loader />
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
