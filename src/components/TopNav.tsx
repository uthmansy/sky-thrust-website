"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { LOGO } from "@/constants/IMAGES";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { LuArrowUpRight } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}

interface MenuItem {
  title: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
];

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-scroll-sticky
      className="z-20 flex justify-between items-center text-sm h-[12vh] min-h-14"
    >
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Left side - Logo and Menu */}
      <div className="flex items-center space-x-10  overflow-hidden h-full">
        {/* Logo */}
        <div className="bg-white px-5 h-full flex items-center ">
          <Link href="/">
            <img src={LOGO.src} className="w-36" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex uppercase h-full">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="hover:bg-gray-50 flex items-center justify-center h-full hover:text-accent-light transition px-5 "
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right side - Contact Button */}
      <div className="hidden md:flex h-full">
        <Link
          href="/contact"
          className="bg-primary text-white px-6 flex items-center hover:bg-accent-light uppercase text-sm transition  h-full space-x-2"
        >
          <span>Get in touch</span> <LuArrowUpRight fontSize={28} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
    </div>
  );
}

export default TopNav;
