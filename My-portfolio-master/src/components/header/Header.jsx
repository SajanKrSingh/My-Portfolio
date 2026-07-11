import CTA from "./CTA";
import HeroScene from "./HeroScene";
import IntroMedia from "./IntroMedia";
import "./header.css";
import profileImage from "../../assets/me11.png";
import introVideo from "../../assets/intro-video-1.mp4";
import Typewriter from "typewriter-effect";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// Swap to "../../assets/intro-video-2.mp4" (or your own file) to change the Hero video.
const introVideoSrc = introVideo;

const Header = () => {
  return (
    <section id="home" className="hero">
      <HeroScene />

      <div className="hero__content">
        <h1>Hello, It's Me</h1>
        <h2 className="name" style={{ fontWeight: "bold", fontSize: "40px" }}>
          {" "}
          Sajan Kumar Singh{" "}
        </h2>
        <div className="hero__role">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "MERN Stack Developer",
                "Next.js Developer",
                "AI-Integrated Web Apps",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </div>
        <p>
          I am a{" "}
          <span style={{ color: "#00d9d9", fontWeight: "bold" }}>
            Full Stack Developer
          </span>{" "}
          building enterprise CRM/HRMS platforms and AI-powered products with
          <br />
          Next.js, React, Node.js and Firebase. I turn complex, real-world
          workflows into fast,
          <br />
          scalable, and user-friendly applications.
        </p>

        <CTA />
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://github.com/SajanKrSingh" alt="Sajan Singh Github">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sajan-kumar-singh-a59952262/"
            alt="Sajan Singh Linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sajan_kumar_singh__?igsh=eHp5Z29wenc4ZG9u"
            alt="Sajan Singh Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100046117037884&mibextid=ZbWKwL"
            alt="Sajan Singh Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Media Section */}
      <div className="hero__image">
        <IntroMedia
          videoSrc={introVideoSrc}
          posterSrc={profileImage}
          alt="Sajan Kumar Singh"
        />
      </div>
    </section>
  );
};

export default Header;
