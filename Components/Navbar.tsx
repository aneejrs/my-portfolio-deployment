
"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY <= 50) {
        setShowNavbar(true);
      }
      // Scrolling down → hide navbar
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setOpen(false);
      }
      // Scrolling up → show navbar
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="container navbar-inner">
        <a href="#" className="logo">
          ANEEJ<span>.</span>
        </a>

        <nav className={open ? "nav-menu active" : "nav-menu"}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

