import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "@/components/ProfileImage";

const skills = [
  "JavaScript (ES6+)",
  "Python",
  "React.js",
  "Node.js",
  "Express.js",
  "Django",
  "FastAPI / Flask",
  "LangChain / RAG",
  "MongoDB / PostgreSQL / MySQL",
  "Docker (basic)",
  "Tailwind CSS",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I'm a full-stack developer with a strong foundation in both frontend
            and backend engineering, and a growing specialization in
            AI-integrated applications. My journey in tech started with a
            Bachelor's in Computer Science and has since evolved through
            hands-on projects spanning MERN stack applications, real-time
            systems, and intelligent AI assistants.
          </p>
          <p className="about-grid-info-text">
            I have completed my Master of Computer Applications (MCA)
            at{" "}
            <a
              href="https://nitte.edu.in"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              NMAM Institute of Technology, Nitte
            </a>{" "}
            (CGPA: 8.15), where I've worked on projects combining MediaPipe,
            LangChain, and Groq APIs with modern React frontends.
          </p>
          <p className="about-grid-info-text">
            I care about writing clean, maintainable code and building products
            that deliver real value. Outside of development, I'm exploring the
            intersection of AI and UX — making intelligent systems that feel
            human.
          </p>
          <p className="about-grid-info-text">
            Here are some technologies I've been working with recently:
          </p>
          <ul className="about-grid-info-list">
            {skills.map((skill) => (
              <li key={skill} className="about-grid-info-list-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <ProfileImage src="/assets/images/profile.jpg" alt="Sathwik Acharya" />
      </div>
    </motion.div>
  );
}

export default About;
