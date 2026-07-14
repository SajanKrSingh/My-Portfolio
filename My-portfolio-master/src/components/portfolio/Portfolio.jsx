import "./portfolio.css";

import IMG_LMS from "../../assets/project/lms.png";
import IMG_HOSPITAL from "../../assets/fh-huquq.png";
import IMG_LOGIN from "../../assets/project/login.png";
import IMG_PORTFOLIO from "../../assets/project/portfolio1.png";
import IMG_EDITOR from "../../assets/project/imgEditor.png";
import IMG_COVID from "../../assets/project/covid.png";
import IMG_DESTIN from "../../assets/project/DestinPath.png";

import React from "react";
import { FaMicrophoneAlt, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../common/Reveal";
import TiltCard from "../common/TiltCard";
import TextReveal from "../common/TextReveal";

const featured = [
  {
    id: 1,
    title: "Zarex — Real-time AI Voice Assistant",
    icon: <FaMicrophoneAlt />,
    description:
      "Cloud-native conversational AI integrating Murf AI (TTS), Google Gemini (LLM) and AssemblyAI (STT) over WebSockets — with switchable personas, live web search and Docker deployment on Render.",
    tags: ["Python", "FastAPI", "WebSockets", "Docker", "Murf.ai"],
    link: "https://github.com/SajanKrSingh",
    github: "https://github.com/SajanKrSingh",
  },
  {
    id: 2,
    title: "DestinPath.AI — Travel Planner",
    img: IMG_DESTIN,
    description:
      "AI-driven itinerary generator on Google Gemini + Places APIs producing personalized day-by-day trip plans — cutting planning time by 90%, with Firebase auth and real-time sync.",
    tags: ["React.js", "Firebase", "Gemini AI"],
    link: "https://destinpath-ai.vercel.app/",
    github: "https://destinpath-ai.vercel.app/",
  },
  {
    id: 3,
    title: "Smart Learning Management System",
    img: IMG_LMS,
    description:
      "Scalable LMS with instructor & student dashboards, Razorpay payments with webhook auto-enrollment, secure media uploads and Redux Toolkit state — cutting redundant API calls by 30%.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
    link: "https://learning-mangement-system-app.vercel.app/",
    github: "https://github.com/SajanKrSingh/LMS",
  },
  {
    id: 4,
    title: "Hospital Management API",
    img: IMG_HOSPITAL,
    description:
      "Robust RESTful backend modeling doctors, patients and medical reports with JWT stateless auth, bcrypt hashing and indexed MongoDB schemas for high-volume workloads.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/SajanKrSingh/Hospital-api-....",
    github: "https://github.com/SajanKrSingh/Hospital-api-....",
  },
];

const moreProjects = [
  {
    id: 5,
    title: "Login & Signup System",
    img: IMG_LOGIN,
    tags: ["HTML", "CSS", "JavaScript", "Sass"],
    link: "https://sajankrsingh.github.io/SignUp-and-SignIn/",
    github: "https://github.com/SajanKrSingh/SignUp-and-SignIn",
  },
  {
    id: 6,
    title: "Portfolio v1",
    img: IMG_PORTFOLIO,
    tags: ["HTML", "CSS", "Bootstrap"],
    link: "https://sajankrsingh.github.io/Portfolio/",
    github: "https://github.com/SajanKrSingh/Portfolio",
  },
  {
    id: 7,
    title: "Image Editor",
    img: IMG_EDITOR,
    tags: ["JavaScript", "CSS"],
    link: "https://sajankrsingh.github.io/Image-Editor/",
    github: "https://github.com/SajanKrSingh/Image-Editor",
  },
  {
    id: 8,
    title: "Covid-19 India Dashboard",
    img: IMG_COVID,
    tags: ["Tableau"],
    link: "https://github.com/SajanKrSingh/Covid-19_in-_india_dashboard",
    github: "https://github.com/SajanKrSingh/Covid-19_in-_india_dashboard",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* Motion graphics: drifting ambient orbs */}
      <div className="portfolio__orb portfolio__orb--1" aria-hidden="true" />
      <div className="portfolio__orb portfolio__orb--2" aria-hidden="true" />

      <div className="section-head">
        <Reveal as="span" className="section-tag" y={20}>
          Portfolio
        </Reveal>
        <TextReveal
          className="section-title"
          text="Selected works"
          highlight={["works"]}
          delay={0.1}
        />
      </div>

      <div className="container works">
        {featured.map((project, index) => (
          <article
            className={`work ${index % 2 === 1 ? "work--flip" : ""}`}
            key={project.id}
          >
            <div className="work__media">
              <div className="work__media-aura" aria-hidden="true" />
              <motion.div
                className="work__media-inner"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="work__media-clip"
                  variants={{
                    hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0.35 },
                    visible: {
                      clipPath: "inset(0% 0% 0% 0%)",
                      opacity: 1,
                      transition: {
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.1,
                      },
                    },
                  }}
                >
                  {project.img ? (
                    <img src={project.img} alt={project.title} loading="lazy" />
                  ) : (
                    <div className="work__media-icon">{project.icon}</div>
                  )}
                </motion.div>
              </motion.div>
            </div>

            <Reveal className="work__info" y={44}>
                <span className="work__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="work__title">{project.title}</h3>
                <p className="work__desc glass">{project.description}</p>
                <ul className="work__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="work__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
            </Reveal>
          </article>
        ))}
      </div>

      <div className="container more-works">
        <Reveal as="h3" className="more-works__title">
          More Projects
        </Reveal>
        <div className="more-works__grid">
          {moreProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 4) * 0.08} y={26}>
              <TiltCard className="mini-work glass" maxTilt={6}>
                <div className="mini-work__image">
                  <img src={project.img} alt={project.title} loading="lazy" />
                </div>
                <div className="mini-work__body">
                  <h4>{project.title}</h4>
                  <ul className="work__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="work__links mini-work__links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
