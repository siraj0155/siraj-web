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
      <header className="w-full md:px-10 px-2.5 cursor-pointer flex justify-between sticky top-0 opacity-0 py-10 max-md:py-6 animate-slideIn-text z-50 backdrop-blur border-black/10 dark:border-white/10">
        <Link href={"/"}>
          <p className="text-4xl stroked-text opacity-0 ps-2 animate-slideIn-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 69 79"
              fill="none"
              className="w-[30px] h-[40px] sm:w-[50px] sm:h-[50px]"
            >
              <path
                d="M26.247 63.704V78.9998C24.9534 78.5569 23.7619 78.1482 22.8086 77.8415C18.2129 76.3085 13.8893 74.8777 9.73621 72.7656C9.39561 72.5954 8.85104 72.3569 8.23833 72.0842C6.09365 71.1304 3.1998 69.8359 0 68.0985V51.0312C5.14034 54.8808 10.5532 57.2655 14.0936 58.8326C14.9788 59.2414 15.7617 59.582 16.3406 59.8886C19.2001 61.3535 22.4683 62.4775 26.247 63.704Z"
                fill="black"
              />
              <path
                d="M68.3583 10.4584V27.9684C62.4007 23.0969 54.639 19.1794 45.175 16.3178C44.1197 15.9772 43.0984 15.6705 42.1112 15.3299V0C44.1537 0.783455 46.5709 1.60104 49.3962 2.45268C56.4773 4.59885 62.8093 7.29022 68.3583 10.4584Z"
                fill="#2B2B2B"
              />
              <path
                d="M6.681 5.30176C6.50613 9.00524 6.8687 19.7536 40.9686 30.1609C82.5193 42.8423 64.8115 71.3436 63.4081 74.5139C60.2734 55.4907 32.0356 51.6472 22.9609 46.991C15.3242 43.0726 -12.6325 35.152 6.681 5.30176Z"
                fill="black"
              />
            </svg>
          </p>
        </Link>
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
