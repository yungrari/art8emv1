"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed z-20 w-full flex items-center justify-between text-xs tracking-tighter font-[550] p-4 ${
          pathname === "/" ? "text-white" : "text-black dark:text-white"
        }`}
      >
        <Link href="/">ART8M</Link>
        <button
          className="relative z-20"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      {isOpen && (
        <nav
          className={
            pathname === "/"
              ? "fixed z-10 inset-0 text-white bg-black/50 backdrop-blur-xl flex flex-col text-[16vw] pt-8 px-4 leading-[0.9] tracking-tight"
              : "fixed z-10 inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-lg flex flex-col text-[16vw] pt-8 px-4 leading-[0.9] tracking-tight"
          }
        >
          <Link
            className={pathname === "/" ? "" : ""}
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className={pathname === "/about" ? "" : ""}
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className={pathname === "/contact" ? "" : ""}
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </>
  );
}
