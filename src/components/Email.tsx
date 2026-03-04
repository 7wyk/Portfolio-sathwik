import React from "react";
import { motion } from "framer-motion";

function Email() {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 2.0 }}
    >
      <a href="mailto:sthwkacharya@gmail.com" className="email-link">
        sthwkacharya@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
