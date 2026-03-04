import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Github",
    icon: <FiGithub />,
    link: "https://github.com/7wyk",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/sathwik2001",
  },
  {
    name: "Email",
    icon: <FiMail />,
    link: "mailto:sthwkacharya@gmail.com",
  },
];

function SocialIcons() {
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 2.0 }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }, index) => (
          <motion.li
            key={name}
            title={name}
            className="social-icons-list-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.0 + index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <a
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
