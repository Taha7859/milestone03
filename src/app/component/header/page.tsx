"use client";

import Link from "next/link";
import { useState, useEffect, useRef, ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Close the menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="h-28 w-full bg-blue-900 flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-white text-5xl font-serif font-bold">
            Taha
          </h1>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          ref={menuRef} // Attach the ref here
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute right-0 md:static top-0 w-3/5 md:w-auto bg-blue-900 md:bg-transparent md:space-x-10 space-y-4 md:space-y-0 p-6 md:p-0`}
        >
          <CustomLink href="/" onClick={closeMenu}>
            HOME
          </CustomLink>
          <CustomLink href="/project" onClick={closeMenu}>
            PROJECT
          </CustomLink>
          <CustomLink href="/contact" onClick={closeMenu}>
            CONTACT
          </CustomLink>
        </nav>
      </div>
    </header>
  );
}

const CustomLink = ({ href, children, onClick }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className="relative group text-white text-lg font-medium"
      onClick={onClick}
    >
      {children}
      <span className="absolute left-0 bottom-0 h-1 w-0 bg-yellow-300 transition-[width,transform] duration-200 group-hover:w-full group-hover:translate-x-0 group-hover:left-0"></span>
    </Link>
  );
};


