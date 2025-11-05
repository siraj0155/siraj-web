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
  <html lang="en" className={`${rufina.variable} ${caveat.variable} h-screen`}>
  <body className="h-screen w-screen bg-red-800 flex flex-col px-20 max-lg:px-5">
    <Providers>
      <Header />
      <div className="flex flex-1 h-full">
        <Sidebar />
        <main className="flex-1 overflow-auto animate-slideIn opacity-0">
          {children}
        </main>
      </div>
    </Providers>
  </body>
</html>


  );
}
