import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram, FaArrowUp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/myLogo.png";
import Reveal from "../common/Reveal";
import "./footer.css";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <span className="footer__watermark" aria-hidden="true">
        SAJAN
      </span>

      {/* Big CTA block */}
      <div className="container footer__cta">
        <Reveal as="h2" className="footer__cta-title">
          Have a project in mind?
          <br />
          <span className="gradient-text">Let's build it together.</span>
        </Reveal>
        <Reveal delay={0.15}>
          <a href="#contact" className="btn btn-primary footer__cta-btn">
            Get In Touch
          </a>
        </Reveal>
      </div>

      <div className="footer__divider" />

      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="Back to top">
            <img src={logo} alt="Sajan — Full Stack Developer" />
          </a>
          <p>
            Full Stack Developer crafting fast, scalable web experiences with
            Next.js, MERN and AI.
          </p>
          <div className="footer__meta">
            <span>
              <FaMapMarkerAlt /> Panchkula, Haryana, India
            </span>
            <a href="mailto:kumarsajan0013@gmail.com">
              <FaEnvelope /> kumarsajan0013@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigate</h4>
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul className="footer__links">
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Connect</h4>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/sajan-kumar-singh/"
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
        </div>
      </div>

      <div className="container footer__bottom">
        <small>
          © {new Date().getFullYear()} Sajan Kumar Singh — Crafted with React,
          passion &amp; too much coffee.
        </small>
        <button
          type="button"
          className="footer__top-btn"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
