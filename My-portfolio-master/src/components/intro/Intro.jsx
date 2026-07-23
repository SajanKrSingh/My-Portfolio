import "./intro.css";
import React from "react";
import img from "../../assets/Me1.png";
import TiltCard from "../common/TiltCard";
import Reveal from "../common/Reveal";
import TextReveal from "../common/TextReveal";
import StatCounter from "../common/StatCounter";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 4, suffix: "", label: "Certifications" },
  { value: 15, suffix: "+", label: "Technologies" },
];

const Intro = () => {
  return (
    <section id="about">
      <div className="section-head">
        <Reveal as="span" className="section-tag" y={20}>
          About Me
        </Reveal>
        <TextReveal
          className="section-title"
          text="Turning ideas into products"
          highlight={["products"]}
          delay={0.1}
        />
      </div>

      <div className="container about__container">
        <Reveal className="about__visual" y={30} delay={0.1}>
          <TiltCard className="about__image-frame" maxTilt={7}>
            <img src={img} alt="Sajan Kumar Singh — Full Stack Developer" />
          </TiltCard>
          <div className="about__float-card about__float-card--role glass">
            <FaBriefcase />
            <div>
              <strong>Web Developer</strong>
              <span>EdiGlobe · Bengaluru</span>
            </div>
          </div>
          <div className="about__float-card about__float-card--edu glass">
            <FaGraduationCap />
            <div>
              <strong>MCA</strong>
              <span>Chandigarh University</span>
            </div>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal as="p" delay={0.15}>
            Hi, I'm <strong>Sajan Kumar Singh</strong> — a Full Stack Developer
            specializing in the <strong>Next.js / MERN stack</strong>. I hold
            an MCA from Chandigarh University (2023–2025) and a BCA from T P
            Verma College (2019–2023). At EdiGlobe I engineered a full-scale
            Enterprise CRM &amp; HRMS platform: a custom lead-generation
            engine, role-based access control, QR-code attendance, and
            Razorpay-powered payment workflows — all built on Next.js 15,
            Firebase and Tailwind CSS.
          </Reveal>
          <Reveal as="p" delay={0.22}>
            Beyond work, I ship AI-first products — a real-time voice
            assistant built on WebSockets and Murf AI, and a Gemini-powered
            travel planner that cuts trip-planning time by 90%. I care about
            clean architecture, fast experiences, and details that make
            software feel effortless.
          </Reveal>

          <Reveal className="about__stats" delay={0.3} y={26}>
            {stats.map((stat) => (
              <div className="about__stat glass" key={stat.label}>
                <span className="about__stat-value gradient-text">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.4}>
            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Intro;
