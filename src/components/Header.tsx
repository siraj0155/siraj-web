"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="w-full md:ps-10  cursor-pointer flex justify-between sticky top-0 opacity-0 py-10 max-md:py-6 animate-slideIn-text z-50 backdrop-blur border-black/10 dark:border-white/10">
        <Link href={"/"}>
          <p className="text-4xl stroked-text opacity-0 animate-slideIn-text">
            SIRAJ
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button isIconOnly variant="light" onPress={onOpen}>
            <svg
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.45 5 3 5.45 3 6s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4zm3 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1zm6 6c0-.55.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </header>

      <Drawer
        classNames={{
          base: "bg-white text-black",
          backdrop: "bg-black/80",
          closeButton: "text-black hover:bg-white/20",
        }}
        placement="top"
        size="xs"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>siraj</DrawerHeader>

              <DrawerBody className="flex flex-col space-y-4 text-lg font-medium">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose} // 👈 this closes the drawer when clicked
                    className="hover:text-gray-300 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </DrawerBody>

              <DrawerFooter className="text-center text-sm opacity-70">
                © 2025 Siraj
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
