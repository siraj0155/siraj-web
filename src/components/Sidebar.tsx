'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex max-lg:hidden flex-col gap-3 justify-end pb-20 h-full text-xl ">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (pathname.startsWith(item.href) && item.href !== "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative transition-all duration-300 ease-in-out transform 
              ${
                isActive
                  ? "text-4xl scale-110"
                  : ""
              }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
