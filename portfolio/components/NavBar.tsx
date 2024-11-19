"use client";
import React, { useState } from "react";
import hamburger from "../public/hamburger.svg";
import closeIcon from "../public/hamburger.svg"; // Add a close icon for mobile menu toggle
import Image from "next/image";

const NavBarLinks = [
  { id: 1, name: "Home", href: "#home", active: true },
  { id: 2, name: "About", href: "#about", active: false },
  { id: 3, name: "Projects", href: "#projects", active: false },
  { id: 4, name: "Contact", href: "#contact", active: false },
];

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <nav className=" mt-5  w-full ">
      {/* <Image alt="f" src={'../public/download.svg'} width={55} height={9}></Image> */}
      <div className="flex items-center justify-between px-5 pt-4 md:px-10">
        <div className="text-2xl font-semibold text-blue-600">
          MY LOGO
        </div>
        <div className="md:hidden">
          <Image
            alt="ham-icon"
            src={isMobileMenuOpen ? closeIcon : hamburger}
            width={30}
            className="cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white">
          {NavBarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-white alg-p"
                
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {NavBarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
