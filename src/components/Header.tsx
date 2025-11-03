"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full cursor-pointer  sticky top-0 opacity-0 py-10 animate-slideIn-text  z-50  backdrop-blur border-b border-black/10 dark:border-white/10">
      <Link href={'/'}  className="">
          <p className="text-4xl stroked-text opacity-0 animate-slideIn-text">
            SIRAJ_WEB
          </p>
        </Link>
    </header>
  );
}


