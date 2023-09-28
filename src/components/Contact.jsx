import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contacts" id="contact_sect">
      <h1 className="title">\Contact Me</h1>
      <div className="contact-con">
        <div className="contact-link">
          <img src={require("../images/Linked.png")} alt="" height={30} />
        </div>
        <div className="contact-link">
          <img src={require("../images/instagram.png")} alt="" height={30} />
        </div>
        <div className="contact-link">
          <img src={require("../images/twitter.png")} alt="" height={30} />
        </div>
        <div className="contact-link">
          <img src={require("../images/Mail.png")} alt="" height={30} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
