import { useRef, useState } from "react";
import CTA from "./CTA";
import HeroScene from "./HeroScene";
import "./header.css";
import profileImage from "../../assets/me11.png";
import introVideo from "../../assets/intro-video.mp4";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import useIsDesktop from "../common/useIsDesktop";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const introVideoSrc = introVideo;

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
  const isDesktop = useIsDesktop(768);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      video.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <section id="home" className="hero">
      {introVideoSrc ? (
        <video
          ref={videoRef}
          className="hero__video-bg"
          src={introVideoSrc}
          poster={profileImage}
          autoPlay
          loop
          muted={muted}
          playsInline
        />
      ) : (
        <div
          className="hero__photo-bg"
          style={{ backgroundImage: `url(${profileImage})` }}
        />
      )}
      <div className="hero__scrim" />
      {isDesktop && <HeroScene />}

      {introVideoSrc && (
        <button
          type="button"
          className="hero__sound-toggle"
          onClick={toggleMute}
          aria-label={muted ? "Unmute intro video" : "Mute intro video"}
        >
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      )}

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
    </section>
  );
};

export default Header;
