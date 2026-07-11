import "./portfolio.css";

// import IMG1 from "../../assets/Educational Website.jpg";
// import IMG2 from "../../assets/reservation-form.png";
// import IMG3 from "../../assets/Startup Agency Project.jpg";
// import IMG4 from "../../assets/fh-huquq.png";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";

import IMG1 from "../../assets/project/lms.png";
import IMG2 from "../../assets/fh-huquq.png";
import IMG3 from "../../assets/project/login.png";
import IMG4 from "../../assets/project/portfolio1.png";
import IMG5 from "../../assets/project/imgEditor.png";
import IMG6 from "../../assets/project/covid.png";
import IMG7 from "../../assets/project/DestinPath.png";

import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import TiltCard from "../common/TiltCard";
import Reveal from "../common/Reveal";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Zarex - AI Voice Assistant",
      icon: <FaMicrophoneAlt />,
      featured: true,
      description:
        "A real-time, cloud-native conversational AI assistant integrating Murf AI (TTS), Google Gemini (LLM), and AssemblyAI (STT) over WebSockets with switchable AI personas, containerized with Docker.",
      technologies: "Python | FastAPI | Docker | WebSockets | Murf.ai",
      link: "https://github.com/SajanKrSingh",
      github: "https://github.com/SajanKrSingh",
    },
    {
      id: 2,
      title: "DestinPath.Ai",
      img: IMG7,
      featured: true,
      description:
        "An AI-driven travel itinerary generator integrating Google Gemini and Google Places APIs to create fully personalized, day-by-day trip plans, achieving a 90% reduction in planning time.",
      technologies: "React.js | Firebase | Gemini AI",
      link: "https://destinpath-ai.vercel.app/",
      github: "https://destinpath-ai.vercel.app/",
    },
    {
      id: 3,
      title: "Smart Learning Management System",
      img: IMG1,
      featured: true,
      description:
        "A scalable LMS with distinct Instructor and Student dashboards, Razorpay payments with webhook-based auto-enrollment, Multer file handling, and Redux Toolkit state management.",
      technologies: "MongoDB | Express.js | React.js | Node.js | Redux",
      link: "https://learning-mangement-system-app.vercel.app/",
      github: "https://github.com/SajanKrSingh/LMS",
    },
    {
      id: 4,
      title: "Hospital Management API",
      img: IMG2,
      featured: true,
      description:
        "A RESTful API handling complex relationships between Doctors, Patients, and Medical Reports, secured with JWT authentication and bcrypt password hashing.",
      technologies: "Node.js | Express.js | MongoDB | JWT",
      link: "https://github.com/SajanKrSingh/Hospital-api-....",
      github: "https://github.com/SajanKrSingh/Hospital-api-....",
    },
    {
      id: 5,
      title: "Login and Signup Page",
      img: IMG3,
      description:
        "The login and signup API enables secure user authentication, allowing users to create accounts and log in with ease.",
      technologies: "HTML | CSS | JavaScript | sass",
      link: "https://github.com/SajanKrSingh/SignUp-and-SignIn",
      github: "https://sajankrsingh.github.io/SignUp-and-SignIn/",
    },
    {
      id: 6,
      title: "Portfolio",
      img: IMG4,
      description:
        "I built a responsive portfolio using HTML, CSS, Sass, JavaScript, and Bootstrap, with a modern design and interactive features.",
      technologies: "Html | CSS | JavaScript | Bootstrap",
      link: "https://sajankrsingh.github.io/Portfolio/",
      github: "https://github.com/SajanKrSingh/Portfolio",
    },
    {
      id: 7,
      title: "Image Editor",
      img: IMG5,
      description:
        " I built using HTML, CSS, JavaScript, and Bootstrap: a user-friendly image editor with features like cropping, filtering, and resizing.",
      technologies: "Html | css | JavaScript",
      link: "https://sajankrsingh.github.io/Image-Editor/",
      github: "https://github.com/SajanKrSingh/Image-Editor",
    },
    {
      id: 8,
      title: "Covid-19_in-_india_dashboard ",
      img: IMG6,
      description:
        "I built using Tableau: a Covid-19 India Dashboard that provides real-time data visualization on cases, recoveries, and vaccinations across India.",
      technologies: "Tableau",
      link: "https://github.com/SajanKrSingh/Covid-19_in-_india_dashboard",
      github: "https://github.com/SajanKrSingh/Covid-19_in-_india_dashboard",
    },
  ];

  return (
    <section id="portfolio">
      <Reveal as="h5">My Recent Work</Reveal>
      <Reveal as="h2" delay={0.1}>Portfolio</Reveal>

      <div className="container portfolio__container">
        {soloProjects.map((pro, index) => (
          <Reveal key={pro.id} delay={(index % 3) * 0.1}>
            <TiltCard className="portfolio__item" maxTilt={7}>
              {pro.featured && <span className="portfolio__badge">Featured</span>}
              <div className="portfolio__item-image">
                {pro.img ? (
                  <img src={pro.img} alt={pro.title} />
                ) : (
                  <div className="portfolio__item-icon">{pro.icon}</div>
                )}
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
