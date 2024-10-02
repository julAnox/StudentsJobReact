import React from "react";
import "./AboutContacts.css";

const AboutContacts = () => {
  return (
    <div>
      <div className="about-contacts">
        <div className="about-contacts-h">
          <h3>Contacts</h3>
        </div>
        <div className="about-contacts-p">
          <p>
            If you would like to get some information, you can send us an email
            at <a href="mailto:contact@students.job">contact@students.job</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContacts;
