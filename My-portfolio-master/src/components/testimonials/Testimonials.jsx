import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/niteshkr3308/',
      name: 'Nitesh King Paul',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think sajan is a great collaborative partner to have. I met sajan in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
    link: 'https://www.linkedin.com/in/sahilkulria19/',
    name: 'Sahil kulria',
    role: 'Software Engineer at XYZ Corp.',
    test: 'Working with Sajan has been an absolute pleasure. His ability to adapt and solve problems efficiently sets him apart from others. Sajan is always eager to learn and improve, making him a valuable team player.',
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/rajnish-kumar-808604219/',
      name: 'Rajnish Kumar',
      role: 'Full Stack Developer at ABC Inc.',
      test: 'Sajan’s dedication and enthusiasm for technology are truly inspiring. His contributions to our projects were always well-thought-out and innovative. I highly recommend him for any development team.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/banty-kumar-792856301/',
      name: 'Banty Kumar',
      role: 'Data Scientist at TechInsights Ltd.',
      test: 'Sajan is a quick learner and has a knack for tackling complex problems with ease. His insights during our collaboration on a machine learning project were invaluable. I appreciate his structured approach and attention to detail.',
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/ankit7002/',
      name: 'Ankit Kumar',
      role: 'UI/UX Designer at Creative Minds Co.',
    test: 'Collaborating with Sajan was a fantastic experience. His understanding of front-end development complemented my, and we worked together to create visually stunning and user-friendly interfaces. Sajan is a talented and dedicated developer, and I look forward to working with him again in the future.',
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials