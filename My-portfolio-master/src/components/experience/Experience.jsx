import React from "react";
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
} from "react-icons/si";
import { FaJava, FaAward } from "react-icons/fa";
import "./experience.css";
import Reveal from "../common/Reveal";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js 15", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Python", icon: <SiPython /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Git / GitHub", icon: <SiGit /> },
  { name: "Java", icon: <FaJava /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Razorpay API", icon: <SiRazorpay /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
];

const workHighlights = [
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

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-head">
        <Reveal as="span" className="section-tag" y={20}>
          Skills & Experience
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.08}>
          My technical <span className="gradient-text">arsenal</span>
        </Reveal>
      </div>

      <div className="container experience__container">
        <div className="skills__grid">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={(index % 6) * 0.05} y={22}>
              <div className="skill-chip glass">
                <span className="skill-chip__icon">{skill.icon}</span>
                <span className="skill-chip__name">{skill.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="work-history">
          <Reveal className="work-history__card glass" y={34}>
            <div className="work-history__timeline" />
            <div className="work-history__header">
              <div>
                <h3>Web Developer — Next.js &amp; MERN</h3>
                <p className="work-history__company">EdiGlobe · Bengaluru</p>
              </div>
              <span className="work-history__period">Jan 2025 — Present</span>
            </div>
            <p className="work-history__overview">
              Built a full-stack Enterprise CRM &amp; HRMS platform automating
              the complete business lifecycle on Next.js 15, Firebase and
              Tailwind CSS.
            </p>
            <div className="work-history__highlights">
              {workHighlights.map((item, index) => (
                <Reveal key={item.heading} delay={index * 0.08} y={20}>
                  <div className="work-highlight">
                    <h4>{item.heading}</h4>
                    <p>{item.details}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

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
