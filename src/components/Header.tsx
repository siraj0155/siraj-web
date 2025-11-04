"use client";
import Link from "next/link";

export default function Header() {
 

  return (
    <header className="w-full cursor-pointer  sticky top-0 opacity-0 py-10 animate-slideIn-text  z-50  backdrop-blur  border-black/10 dark:border-white/10">
      <Link href={'/'}  className="">
          <p className="text-4xl stroked-text opacity-0 animate-slideIn-text">
            SIRAJ_WEB
          </p>
        </Link>
    </header>
  );
}


