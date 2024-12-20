import React from "react";
import Container from "../Container";
import Link from "next/link";
import { LOGO, LOGO_WHITE } from "@/constants/IMAGES";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary text-primary py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 lg:gap-40 border-b border-primary pb-10">
          <div className="flex flex-col space-y-5">
            <Link href={"/"}>
              <div className="flex items-center space-x-3">
                <img
                  src={LOGO_WHITE.src}
                  alt="logo"
                  className="h-14 md:h-16 opacity-50"
                />
              </div>
            </Link>
            <p className="max-w-md">
              Thank you for visiting Sky Thrust Services. We are dedicated to
              providing reliable solutions and exceptional service. Connect with
              us to learn more about how we can support your business and
              project needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 lg:gap-40">
            <div>
              <h4 className="uppercase font-bold mb-2 tracking-wider text-primary">
                Contact
              </h4>
              <ul className="flex flex-col space-y-3">
                <li>info@skythrustservices.com</li>
                <li>Head Office: NO 2007, Bachirawa, Kano.</li>
                <li>+234 000 000 0000</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase font-bold mb-2 tracking-wider text-primary">
                Follow Us
              </h4>
              <ul className="flex flex-col space-y-3">
                <li>info@skythrustservices.com</li>
                <li className="flex items-center space-x-3">
                  <Link
                    href={"x.com"}
                    className="w-8 h-8 flex items-center justify-center bg-primary text-black"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href={"facebook.com"}
                    className="w-8 h-8 flex items-center justify-center bg-primary text-black"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href={"instagram.com"}
                    className="w-8 h-8 flex items-center justify-center bg-primary text-black"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="w-fit md:ml-auto mt-10 opacity-70">
          &copy; SkyThrust Services. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
