import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Skills" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <nav className="navbar__inner">
        <a href="#home" className="navbar__logo" aria-label="Sajan Kumar Singh — home">
          Sajan<span>.</span>
        </a>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary navbar__cta">
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
