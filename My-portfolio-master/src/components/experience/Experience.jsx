import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import "./experience.css";
import TiltCard from "../common/TiltCard";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "Java", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: [
      "Next.js 15 (App Router)",
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Firebase (Auth/Firestore)",
      "MongoDB",
      "WebSockets",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Docker",
      "Render",
      "Git / GitHub",
      "Postman",
      "Razorpay API",
      "NodeMailer",
      "Murf.ai",
    ],
  },
];

const workHighlights = [
  {
    heading: "Custom Lead Generation Engine",
    details:
      "Built a dynamic system generating public student registration pages with Smart Auto-Assignment routing and real-time \"Thank You\" email + webhook triggers, replacing static Google Forms.",
  },
  {
    heading: "Advanced Authentication & Onboarding",
    details:
      "Built a Superadmin tool for staff onboarding into Firebase Auth, automated credential delivery via NodeMailer, and engineered strict RBAC middleware across Superadmin, HR, Sales, and Candidate dashboards.",
  },
  {
    heading: "HR Employee Management",
    details:
      "Developed a QR-code based Digital Attendance system and a centralized Employee Repository for documents and performance tracking.",
  },
  {
    heading: "Sales CRM & Financial Integration",
    details:
      "Integrated Razorpay for a custom payment link generator, built a Kanban-style lead pipeline with bulk transfer, and shipped a Recharts-powered Analytics Command Center.",
  },
];

const certifications = [
  "30 Days of AI Voice Agents Challenge - Murf.ai",
  "Full Stack Web Development - PW Skills",
  "Data Structures & Algorithms in Java - Coding Ninjas",
  "Frontend & Backend Development - Coding Ninjas",
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__grid">
          {skillCategories.map((category) => (
            <TiltCard className="experience__frontend" key={category.title} maxTilt={6}>
              <h3>{category.title}</h3>
              <div className="experience__content">
                {category.skills.map((skill) => (
                  <article className="experience__details" key={skill}>
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>{skill}</h4>
                  </article>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="work-history">
          <h3>Work Experience</h3>
          <div className="work-history__role">
            <div className="work-history__role-header">
              <h4>Web Developer (Next.js &amp; MERN Stack)</h4>
              <span>Jan 2025 - Present</span>
            </div>
            <p className="work-history__company">EdiGlobe &middot; Bengaluru</p>
            <p className="work-history__overview">
              Developed a full-stack Enterprise CRM &amp; HRMS solution to
              automate the entire business lifecycle, replacing manual Google
              Forms with a custom "Lead Gen Engine" built on Next.js 15,
              Firebase, and Tailwind CSS.
            </p>
            <div className="work-history__highlights">
              {workHighlights.map((item) => (
                <TiltCard className="work-history__card" key={item.heading} maxTilt={5}>
                  <h5>{item.heading}</h5>
                  <p>{item.details}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <ul className="certifications__list">
            {certifications.map((cert) => (
              <li key={cert}>
                <FaAward className="experience__details-icon" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
