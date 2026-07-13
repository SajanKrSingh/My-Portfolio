import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo">
          Sajan<span>.</span>
        </a>

        <ul className="permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/sajan-kumar-singh-a59952262/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/SajanKrSingh"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/sajan_kumar_singh__?igsh=eHp5Z29wenc4ZG9u"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="footer__copyright">
          <small>
            © {new Date().getFullYear()} Sajan Kumar Singh — Crafted with
            React, passion & too much coffee.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
