import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiPython,
  SiDocker,
  SiGit,
  SiFastapi,
  SiRazorpay,
  SiBootstrap,
  SiMysql,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaAward } from "react-icons/fa";
import "./experience.css";
import Reveal from "../common/Reveal";
import TextReveal from "../common/TextReveal";

const skillGroups = [
  {
    title: "Frontend",
    desc: "Interfaces that feel effortless",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js 15", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend",
    desc: "APIs engineered to scale",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Languages",
    desc: "Fluent across the stack",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools & DevOps",
    desc: "Shipping with confidence",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git / GitHub", icon: <SiGit /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Razorpay", icon: <SiRazorpay /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

const workCards = [
  {
    heading: "Custom Lead Generation Engine",
    details:
      "Dynamic public registration pages with smart auto-assignment routing, real-time email triggers and webhook-driven dashboards — replacing Google Forms entirely.",
  },
  {
    heading: "Authentication & Onboarding",
    details:
      "Superadmin tooling on Firebase Auth with automated credential delivery (NodeMailer) and strict RBAC across Superadmin, HR, Sales and Candidate dashboards.",
  },
  {
    heading: "HR Management Module",
    details:
      "QR-code based digital attendance and a centralized employee repository for documents and performance tracking.",
  },
  {
    heading: "Sales CRM & Payments",
    details:
      "Razorpay payment-link generator, Kanban lead pipeline with bulk transfer, and a Recharts analytics command center for management.",
  },
];

const certifications = [
  "30 Days of AI Voice Agents Challenge — Murf.ai",
  "Full Stack Web Development — PW Skills",
  "Data Structures & Algorithms in Java — Coding Ninjas",
  "Frontend & Backend Development — Coding Ninjas",
];

// One card in a scroll-driven deck: every card pins at the SAME spot below
// the navbar; the next card rides up and fully covers it while the covered
// card presses back (scales down).
const DeckCard = ({ index, total, progress, className = "", children }) => {
  const targetScale = 1 - (total - index) * 0.06;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <motion.div
      className={className}
      style={{
        zIndex: index + 1,
        scale,
        transformOrigin: "top center",
      }}
    >
      {children}
    </motion.div>
  );
};

const Experience = () => {
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const skillsRef = useRef(null);
  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="experience">
      <div className="section-head">
        <Reveal as="span" className="section-tag" y={20}>
          Skills & Experience
        </Reveal>
        <TextReveal
          className="section-title"
          text="My technical arsenal"
          highlight={["arsenal"]}
          delay={0.1}
        />
      </div>

      <div className="container experience__container">
        {/* Skill groups — scroll-driven cover deck */}
        <div className="skills-stack" ref={skillsRef}>
          {skillGroups.map((group, gi) => (
            <DeckCard
              key={group.title}
              index={gi}
              total={skillGroups.length}
              progress={skillsProgress}
              className="skill-group skills-stack__card"
            >
              <div className="skill-group__head">
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.desc}</p>
                </div>
                <span className="skill-group__count">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="skill-group__tiles">
                {group.skills.map((skill) => (
                  <div className="skill-tile" key={skill.name}>
                    <span className="skill-tile__icon">{skill.icon}</span>
                    <span className="skill-tile__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </DeckCard>
          ))}
        </div>

        {/* Work experience — sticky stacking cards */}
        <div className="work-history">
          <Reveal className="work-lead glass" y={30}>
            <div className="work-lead__header">
              <div>
                <h3>Web Developer — Next.js &amp; MERN</h3>
                <p className="work-lead__company">EdiGlobe · Bengaluru</p>
              </div>
              <span className="work-lead__period">Jan 2025 — Present</span>
            </div>
            <p className="work-lead__overview">
              Built a full-stack Enterprise CRM &amp; HRMS platform automating
              the complete business lifecycle on Next.js 15, Firebase and
              Tailwind CSS. Scroll through the highlights ↓
            </p>
          </Reveal>

          <div className="work-stack" ref={stackRef}>
            {workCards.map((card, index) => (
              <DeckCard
                key={card.heading}
                index={index}
                total={workCards.length}
                progress={scrollYProgress}
                className="work-stack__card"
              >
                <span className="work-stack__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{card.heading}</h4>
                  <p>{card.details}</p>
                </div>
              </DeckCard>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certs">
          <Reveal as="h3" className="certs__title">
            Certifications
          </Reveal>
          <div className="certs__grid">
            {certifications.map((cert, index) => (
              <Reveal as="div" className="cert-card glass" key={cert} delay={index * 0.07} y={20}>
                <FaAward />
                <span>{cert}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
