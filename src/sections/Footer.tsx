import React from "react";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/7wyk"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <span className="footer-info">
          Designed &amp; Built by Sathwik Acharya
        </span>
        <div className="footer-git">
          <div className="footer-git-item">
            <FiGithub className="footer-git-item-icon" />
            <span className="footer-git-item-text">github.com/7wyk</span>
          </div>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
