import "./contact.css";

import React, { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Reveal from "../common/Reveal";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_zzzp1t1',
        "template_w2h8f4c",
        formRef.current,
        "TdjtFqdnzX7YXRExO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <Reveal as="h5">Get In Touch</Reveal>
      <Reveal as="h5" delay={0.05}>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </Reveal>
      <Reveal as="h2" delay={0.1}>Contact Me</Reveal>
      <div className="container contact__container">
        <div className="contact__options">
          <Reveal as="article" className="contact__option" delay={0.15}>
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kumarsajan0013@gmail.com</h5>
            <a href="mailto:kumarsajan0013@gmail.com">Send a message</a>
          </Reveal>
          <Reveal as="article" className="contact__option" delay={0.22}>
            <FaPhoneAlt className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+91 8873078315</h5>
            <a href="tel:+918873078315">Call me</a>
          </Reveal>
          <Reveal as="article" className="contact__option" delay={0.29}>
            <FaMapMarkerAlt className="contact__option-icon" />
            <h4>Location</h4>
            <h5>Ramgarh, Panchkula, Haryana</h5>
          </Reveal>
        </div>
        <Reveal delay={0.2} y={30}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
