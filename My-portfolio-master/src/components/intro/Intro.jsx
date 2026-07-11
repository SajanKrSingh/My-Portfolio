import "./intro.css";
import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me1.png";
import TiltCard from "../common/TiltCard";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <TiltCard className="about__me-image" maxTilt={8}>
            <img src={img} alt="Sajan Kumar Singh" />
          </TiltCard>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience </h5>
              <small>Jan 2025 - Present</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed Projects</small>
            </article>
          </div>
          <p>
            "Hi, I'm Sajan Kumar Singh, a Full Stack Developer specializing in
            the Next.js / MERN stack. I hold an MCA from Chandigarh University
            and currently work at EdiGlobe, where I built a full-stack
            Enterprise CRM &amp; HRMS platform using Next.js 15, Firebase, and
            Tailwind CSS &mdash; covering lead generation, RBAC authentication,
            HR attendance, and Razorpay-powered financial workflows. Outside of
            work, I explore AI-integrated products, from real-time voice
            assistants to Gemini-powered travel planners, always aiming to
            ship fast, reliable, and delightful user experiences."
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
