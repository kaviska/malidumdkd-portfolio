"use client";
import React, { useState } from "react";
import Image from "next/image";
import hamburger from "../public/hamburger.svg";
import closeIcon from "../public/hamburger.svg";
import logo from "../public/logo.png";

const NavBarLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="mt-5 w-full">
      <div className="flex items-center justify-between px-5 pt-0 md:px-10">
        <div>
          <Image alt="logo" src={logo} width={140} className="cursor-pointer" />
        </div>
        <div className="md:hidden">
          <Image
            alt="menu-icon"
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
                className="cursor-pointer alg-p text-white hover:text-blue-400"
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
                  className="cursor-pointer text-gray-700 hover:text-blue-500"
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
