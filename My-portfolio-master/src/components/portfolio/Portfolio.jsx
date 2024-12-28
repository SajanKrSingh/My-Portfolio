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

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "DestinPath.Ai",
      img: IMG7,
      description:
        "Our DestinPat.ai offers user to plan trips to a destination of their choice.",
      technologies: "React |Firebase | Tailwind CSS",
      link: "https://destinpath-ai.vercel.app/",
      github: "https://destinpath-ai.vercel.app/",
    },
    {
      id: 2,
      title: "Learning Management System",
      img: IMG1,
      description:
        "Our MERN-based LMS offers secure authentication, course management, and live classes.",
      technologies: "MongoDB | Express Js | React Js | Node Js",

      link: "https://learning-mangement-system-app.vercel.app/",
      github: "https://github.com/SajanKrSingh/LMS",
    },
    {
      id: 3,
      title: "Hospital API",
      img: IMG2,
      description:
        "The hospital API enables secure access to patient records, appointments, doctor management, and medical history.",
      technologies: "MongoDB | Express Js | Node Js",
      link: "https://github.com/SajanKrSingh/Hospital-api-....",
      github: "https://github.com/SajanKrSingh/Hospital-api-....",
    },
    {
      id: 4,
      title: "Login and Signup Page",
      img: IMG3,
      description:
        "The login and signup API enables secure user authentication, allowing users to create accounts and log in with ease.",
      technologies: "HTML | CSS | JavaScript | sass",
      link: "https://github.com/SajanKrSingh/SignUp-and-SignIn",
      github: "https://sajankrsingh.github.io/SignUp-and-SignIn/",
    },
    {
      id: 5,
      title: "Portfolio",
      img: IMG4,
      description:
        "I built a responsive portfolio using HTML, CSS, Sass, JavaScript, and Bootstrap, with a modern design and interactive features.",
      technologies: "Html | CSS | JavaScript | Bootstrap",
      link: "https://sajankrsingh.github.io/Portfolio/",
      github: "https://github.com/SajanKrSingh/Portfolio",
    },
    {
      id: 6,
      title: "Image Editor",
      img: IMG5,
      description:
        " I built using HTML, CSS, JavaScript, and Bootstrap: a user-friendly image editor with features like cropping, filtering, and resizing.",
      technologies: "Html | css | JavaScript",
      link: "https://sajankrsingh.github.io/Image-Editor/",
      github: "https://github.com/SajanKrSingh/Image-Editor",
    },
    {
      id: 7,
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
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
