import "./intro.css";
import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me1.png";
import TiltCard from "../common/TiltCard";
import Reveal from "../common/Reveal";

const Intro = () => {
  return (
    <section id="about">
      <Reveal as="h5">Get to know</Reveal>
      <Reveal as="h2" delay={0.1}>About Me</Reveal>
      <div className="container about__container">
        <Reveal className="about__me" y={0} delay={0.15}>
          <TiltCard className="about__me-image" maxTilt={8}>
            <img src={img} alt="Sajan Kumar Singh" />
          </TiltCard>
        </Reveal>
        <div className="about__content">
          <div className="about__cards">
            <Reveal as="article" className="about__card" delay={0.2}>
              <FaAward className="about__icon" />
              <h5>Experience </h5>
              <small>Jan 2025 - Present</small>
            </Reveal>
            <Reveal as="article" className="about__card" delay={0.3}>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed Projects</small>
            </Reveal>
          </div>
          <Reveal as="p" delay={0.35}>
            "Hi, I'm Sajan Kumar Singh, a Full Stack Developer specializing in
            the Next.js / MERN stack. I hold an MCA from Chandigarh University
            and currently work at EdiGlobe, where I built a full-stack
            Enterprise CRM &amp; HRMS platform using Next.js 15, Firebase, and
            Tailwind CSS &mdash; covering lead generation, RBAC authentication,
            HR attendance, and Razorpay-powered financial workflows. Outside of
            work, I explore AI-integrated products, from real-time voice
            assistants to Gemini-powered travel planners, always aiming to
            ship fast, reliable, and delightful user experiences."
          </Reveal>
          <Reveal delay={0.4}>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Intro;
