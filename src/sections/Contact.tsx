import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I'm actively open to full-time opportunities in software engineering and
        AI development. Whether you have an exciting role, a project to discuss,
        or just want to connect — my inbox is always open.
      </p>
      <div className="contact-cta">
        <Button link="mailto:sthwkacharya@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
