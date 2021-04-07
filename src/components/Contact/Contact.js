import "./Contact.css";

import React from "react";
import Resume from "../../files/resume.pdf";

function Contact() {
  return (
    <div className="contact-title-container">
      <div className="contact-title">
        <b>CONTACT + PROFESSIONAL MEDIA</b>
      </div>
      <div className="contact-row">
        <div className="contact-item">Zach Izzard</div>
        <a
          className="contact-link"
          href={Resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="contact-row">
        <div className="contact-item">609.731.9486</div>
        <a
          className="contact-link"
          href="https://github.com/zizzard"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="contact-row">
        <div className="contact-item">zachizzard@gmail.com</div>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/zachizzard/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
