import React, { useRef } from "react";
import "./contact.css";
import Linkedin from "../../assets/linkedin.png";
import twiter from "../../assets/twiter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.jpeg";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_keqdspo",
        "template_rihtzut",
        form.current,
        "nxc4w_u3zATfDYj0h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactpagetitle">Contact me </h1>
        <span className="contactDesc">
          please fill the form bello to discus any job opportinity
        </span>
        <form action="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="your name"
            name="your_name"
          />
          <input
            type="email "
            className="email"
            placeholder="your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            id=""
            rows="5"
            placeholder="your message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="Links">
            <a href="https://www.linkedin.com/feed/">
              <img src={Linkedin} alt="" className="link" />
            </a>
            <a href="https://www.twiter.com">
              <img src={twiter} alt="" className="link" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="" className="link" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
