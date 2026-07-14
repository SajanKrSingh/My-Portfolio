import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import Reveal from "../common/Reveal";
import TextReveal from "../common/TextReveal";

const testimonials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/niteshkr3308/",
    name: "Nitesh King Paul",
    role: "Cyber Security Engineer",
    test: "As a developer and a problem solver, Sajan is a great collaborative partner to have. Since we met on JavaScript & React projects he has drastically progressed in his understanding of the development process, and he always keeps a professional environment.",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/sahilkulria19/",
    name: "Sahil Kulria",
    role: "Software Engineer",
    test: "Working with Sajan has been an absolute pleasure. His ability to adapt and solve problems efficiently sets him apart. He is always eager to learn and improve, making him a valuable team player.",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/rajnish-kumar-808604219/",
    name: "Rajnish Kumar",
    role: "Full Stack Developer",
    test: "Sajan's dedication and enthusiasm for technology are truly inspiring. His contributions to our projects were always well-thought-out and innovative. I highly recommend him for any development team.",
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/banty-kumar-792856301/",
    name: "Banty Kumar",
    role: "Data Scientist",
    test: "Sajan is a quick learner with a knack for tackling complex problems with ease. His insights during our machine learning collaboration were invaluable — structured approach, great attention to detail.",
  },
  {
    id: 5,
    link: "https://www.linkedin.com/in/ankit7002/",
    name: "Ankit Kumar",
    role: "UI/UX Designer",
    test: "Collaborating with Sajan was fantastic. His front-end expertise complemented my designs and together we shipped visually stunning, user-friendly interfaces. A talented and dedicated developer.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="section-head">
        <Reveal as="span" className="section-tag" y={20}>
          Testimonials
        </Reveal>
        <TextReveal
          className="section-title"
          text="What people say"
          highlight={["say"]}
          delay={0.1}
        />
      </div>

      <Reveal y={30}>
        <Swiper
          className="container testimonials__container"
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item) => (
            <SwiperSlide className="testimonial glass" key={item.id}>
              <FaQuoteLeft className="testimonial__quote" />
              <p className="client__review">{item.test}</p>
              <div className="testimonial__footer">
                <div>
                  <h5 className="client__name">{item.name}</h5>
                  <span className="client__role">{item.role}</span>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="client__link"
                  aria-label={`${item.name} on LinkedIn`}
                >
                  <BsLinkedin />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
};

export default Testimonials;
