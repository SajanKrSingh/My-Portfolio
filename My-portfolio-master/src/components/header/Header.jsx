import CTA from "./CTA";
import HeroScene from "./HeroScene";
import IntroMedia from "./IntroMedia";
import "./header.css";
import profileImage from "../../assets/me11.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// Drop your intro video in src/assets and pass its import here to replace the photo.
const introVideoSrc = null;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Header = () => {
  return (
    <section id="home" className="hero">
      <HeroScene />

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>Hello, It's Me</motion.h1>
        <motion.h2
          className="name"
          variants={itemVariants}
          style={{ fontWeight: "bold", fontSize: "40px" }}
        >
          {" "}
          Sajan Kumar Singh{" "}
        </motion.h2>
        <motion.div className="hero__role" variants={itemVariants}>
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
        </motion.div>
        <motion.p variants={itemVariants}>
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
        </motion.p>

        <motion.div variants={itemVariants}>
          <CTA />
        </motion.div>
        {/* Social Media Links */}
        <motion.div className="social-icons" variants={itemVariants}>
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
        </motion.div>
      </motion.div>

      {/* Media Section */}
      <motion.div
        className="hero__image"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <IntroMedia
          videoSrc={introVideoSrc}
          posterSrc={profileImage}
          alt="Sajan Kumar Singh"
        />
      </motion.div>
    </section>
  );
};

export default Header;
