import { useRef, useState } from "react";
import "./header.css";
import profileImage from "../../assets/me11.png";
import introVideo from "../../assets/intro-video.mp4";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Marquee from "../common/Marquee";
import { FaVolumeMute, FaVolumeUp, FaArrowDown } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import CV from "../../assets/Sajan_Kumar_Resume.pdf";

const introVideoSrc = introVideo;

const nameWords = ["Sajan", "Kumar", "Singh"];

const marqueeItems = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "FastAPI",
  "Docker",
  "AI Integration",
  "WebSockets",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Header = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) video.play().catch(() => {});
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
      <div className="hero__vignette" />

      <div className="hero__inner">
        <motion.div
          className="hero__badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <span className="hero__badge-dot" />
          Available for new opportunities
        </motion.div>

        <h1 className="hero__name" aria-label="Sajan Kumar Singh">
          {nameWords.map((word, i) => (
            <span className="hero__name-mask" key={word}>
              <motion.span
                className={`hero__name-word ${i === 2 ? "gradient-text" : ""}`}
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.25 + i * 0.12,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero__role"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
        >
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

        <motion.p
          className="hero__bio"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          I build enterprise CRM/HRMS platforms and AI-powered products with
          Next.js, React, Node.js and Firebase — turning complex, real-world
          workflows into fast, scalable, delightful applications.
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.95}
        >
          <a href="#portfolio" className="btn btn-primary">
            View My Work
          </a>
          <a href={CV} download className="btn">
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
        >
          <a href="https://github.com/SajanKrSingh" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sajan-kumar-singh-a59952262/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sajan_kumar_singh__?igsh=eHp5Z29wenc4ZG9u"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100046117037884&mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </motion.div>
      </div>

      {introVideoSrc && (
        <button
          type="button"
          className="hero__sound-toggle"
          onClick={toggleMute}
          aria-label={muted ? "Unmute intro video" : "Mute intro video"}
        >
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          <span>{muted ? "Unmute intro" : "Mute"}</span>
        </button>
      )}

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <FaArrowDown />
      </motion.a>

      <div className="hero__marquee">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
};

export default Header;
