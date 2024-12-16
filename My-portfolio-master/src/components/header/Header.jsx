import React, { useState, useEffect } from "react";
import CTA from "./CTA";
import "./header.css";
import profileImage from "../../assets/me11.png";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1>Hello, It's Me</h1>
        <h2 className="name" style={{ fontWeight: "bold", fontSize: "40px" }}>
          {" "}
          Sajan Kumar Singh{" "}
          <span
            style={{ color: "yellow", fontWeight: "bold", fontSize: "15px" }}
          >
            ( Full Stack Developer )
          </span>
        </h2>
        <p>
          "I am an aspiring{" "}
          <span style={{ color: "#00d9d9", fontWeight: "bold" }}>
            Full Stack Developer
          </span>
          , specializing in the MERN stack
          <br />
          to build scalable, efficient, and user-friendly applications. I have a
          <br />
          passion for solving real-world problems through clean, maintainable
          <br />
          code and modern web technologies."
        </p>

        <CTA />
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://github.com/SajanKrSingh">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sajan-kumar-singh-a59952262/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/sajan_kumar_singh__?igsh=eHp5Z29wenc4ZG9u">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100046117037884&mibextid=ZbWKwL">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero__image">
        <img src={profileImage} alt="Profile" />
        
      </div>
    </section>
  );
};

export default Header;
