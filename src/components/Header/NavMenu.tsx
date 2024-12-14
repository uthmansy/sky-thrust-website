import React, { useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              className="px-5 py-2 uppercase text-sm"
              key={item.name}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden absolute right-0 top-0 p-5 h-full flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`md:hidden bg-primary fixed z-50 top-0 left-0 right-0 w-full py-16 transition-all duration-300 ${
            isOpen ? "h-auto" : "h-0"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white absolute right-5 top-5"
          >
            <IoMdClose className="text-3xl" />
          </button>
          {menuItems.map((item) => (
            <Link
              className="block p-4 text-center uppercase tracking-wider"
              key={item.name}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
