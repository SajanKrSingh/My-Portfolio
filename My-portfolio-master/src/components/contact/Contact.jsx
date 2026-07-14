import "./contact.css";

import React, { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Reveal from "../common/Reveal";
import TextReveal from "../common/TextReveal";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_zzzp1t1",
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
      <div className="section-head">
        <Reveal as="span" className="section-tag" y={20}>
          Contact
        </Reveal>
        <TextReveal
          className="section-title"
          text="Let's build something great"
          highlight={["great"]}
          delay={0.1}
        />
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <Reveal as="article" className="contact__option glass" delay={0.1} y={24}>
            <span className="contact__option-icon">
              <MdOutlineEmail />
            </span>
            <div>
              <h4>Email</h4>
              <h5>kumarsajan0013@gmail.com</h5>
              <a href="mailto:kumarsajan0013@gmail.com">Send a message</a>
            </div>
          </Reveal>
          <Reveal as="article" className="contact__option glass" delay={0.18} y={24}>
            <span className="contact__option-icon">
              <FaPhoneAlt />
            </span>
            <div>
              <h4>Phone</h4>
              <h5>+91 8873078315</h5>
              <a href="tel:+918873078315">Call me</a>
            </div>
          </Reveal>
          <Reveal as="article" className="contact__option glass" delay={0.26} y={24}>
            <span className="contact__option-icon">
              <FaMapMarkerAlt />
            </span>
            <div>
              <h4>Location</h4>
              <h5>Panchkula, Haryana, India</h5>
              <span className="contact__muted">Open to remote & relocation</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={30}>
          <form ref={formRef} onSubmit={handleSubmit} className="contact__form glass">
            <div className="contact__row">
              <input
                type="text"
                placeholder="Your Full Name"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                required
              />
            </div>
            <textarea
              placeholder="Tell me about your project…"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Send Message
            </button>
            {message && (
              <span className="contact__success">
                Thanks! I'll reply as soon as possible :)
              </span>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
