import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sectionLinks = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Work", link: "#work" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

  // Scroll listener for sticky blur nav
  useEffect(() => {
    const handleScroll = () => setNavbarVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close nav on link click / outside click
  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    const closeNav = () => setResponsiveNavVisible(false);
    links.forEach((link) => link.addEventListener("click", closeNav));

    const nav = document.querySelector(".nav-items");
    const stopProp = (e: Event) => e.stopPropagation();
    nav?.addEventListener("click", stopProp);

    const html = document.querySelector("html");
    html?.addEventListener("click", closeNav);

    return () => {
      links.forEach((link) => link.removeEventListener("click", closeNav));
      nav?.removeEventListener("click", stopProp);
      html?.removeEventListener("click", closeNav);
    };
  }, []);

  // Blur main content when mobile nav is open
  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) main?.classList.add("blur");
    else main?.classList.remove("blur");
  }, [responsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        {/* Logo */}
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <a href="#" aria-label="Home">
            <Logo />
          </a>
        </motion.div>

        {/* Mobile hamburger */}
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {responsiveNavVisible ? (
            <CgClose onClick={(e) => { e.stopPropagation(); setResponsiveNavVisible(false); }} />
          ) : (
            <GiHamburgerMenu onClick={(e) => { e.stopPropagation(); setResponsiveNavVisible(true); }} />
          )}
        </motion.div>

        {/* Nav items */}
        <div className={`${responsiveNavVisible ? "nav-responsive" : ""} nav-items`}>
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 + index * 0.1 }}
              >
                <a href={link} className="nav-items-list-item-link">
                  {name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
          >
            <Button text="Resume" link="/assets/resume.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
