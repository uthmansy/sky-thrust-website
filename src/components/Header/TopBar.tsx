import React from "react";
import Container from "../Container";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LOGO_WHITE } from "@/constants/IMAGES";

function TopBar() {
  return (
    <div className="relative border-b border-white border-opacity-20">
      <Container>
        <div className="flex items-center justify-between h-[15vh]">
          <div>
            <Link href={"/"}>
              <img src={LOGO_WHITE.src} alt="logo" className="h-14 md:h-16" />
            </Link>
          </div>
          <NavMenu />
          <div className="space-x-5 text-2xl opacity-70 hidden md:flex">
            <Link
              href={"x.com"}
              className="w-8 h-8 flex items-center justify-center text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"facebook.com"}
              className="w-8 h-8 flex items-center justify-center text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"instagram.com"}
              className="w-8 h-8 flex items-center justify-center text-white"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
