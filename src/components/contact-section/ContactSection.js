import React from "react";
import { localLinks } from "./localLinks";

const ContactSection = () => {
  const localLinksList = localLinks?.map((localLink) => (
    <a key={localLink.id} href={localLink?.href}>
      {localLink?.name}
    </a>
  ));
  return (
    <div className="conatact-container">
      <div className="conatact-content">
        <div className="local-links">{localLinksList}</div>
        <div className="social-links-container">
          <div className="social-links-content">
            <p>Join The Conversation</p>
            <div className="socail-links">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-twitch" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
