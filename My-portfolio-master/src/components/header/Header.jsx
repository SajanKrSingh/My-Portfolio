import "./header.css";
import { useEffect, useRef } from "react";
import introVideo from "../../assets/intro-video.mp4";
import Typewriter from "typewriter-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "../common/Marquee";
import { FaArrowDown } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import CV from "../../assets/Sajan_Kumar_Resume.pdf";

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
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Try to autoplay with sound; if the browser blocks it, start muted and
  // unmute on the visitor's first interaction anywhere on the page.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cleanup = () => {};
    video.muted = false;
    const attempt = video.play();

    if (attempt && attempt.catch) {
      attempt.catch(() => {
        video.muted = true;
        video.play().catch(() => {});

        const unmute = () => {
          video.muted = false;
          video.play().catch(() => {});
          cleanup();
        };
        window.addEventListener("pointerdown", unmute);
        window.addEventListener("keydown", unmute);
        cleanup = () => {
          window.removeEventListener("pointerdown", unmute);
          window.removeEventListener("keydown", unmute);
        };
      });
    }

    return () => cleanup();
  }, []);

  // Scroll parallax: text drifts up, video drifts down, hero fades out
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Motion graphics: drifting gradient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <motion.div className="hero__inner" style={{ opacity: heroOpacity }}>
        <motion.div className="hero__text" style={{ y: textY }}>
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
        </motion.div>

        <motion.div
          className="hero__media"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          style={{ y: mediaY }}
        >
          <div className="hero__media-glow" aria-hidden="true" />
          <video
            ref={videoRef}
            className="hero__video"
            src={introVideo}
            autoPlay
            loop
            playsInline
          />
          <div className="hero__media-overlay" aria-hidden="true" />
        </motion.div>
      </motion.div>

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
