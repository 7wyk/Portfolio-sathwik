import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    name: "Udupi Web Solutions",
    role: "Front-End Developer Intern",
    url: "https://www.linkedin.com/in/sathwik2001",
    start: "January 2025",
    end: "February 2025",
    shortDescription: [
      "Contributed to production front-end development projects under direct leadership, delivering responsive and user-friendly web interfaces.",
      "Collaborated cross-functionally to translate design specs into clean, performant code using React, Tailwind CSS, and modern JavaScript.",
      "Gained hands-on experience with professional development workflows, code reviews, and deployment pipelines in a real-world production environment.",
    ],
  },
  {
    name: "NMAM Institute of Technology",
    role: "MCA — Master of Computer Applications",
    url: "https://nitte.edu.in",
    start: "2023",
    end: "2025",
    shortDescription: [
      "CGPA: 8.15 — Focused on advanced software engineering, AI/ML, and full-stack application development.",
      "Built major projects including a real-time sign-language translation system (SignSpeak AI), an RAG-based medical chatbot (MediQuery AI), and an e-learning platform (Skillify).",
      "Gained deep expertise in LangChain, FastAPI, MediaPipe, vector databases, and scalable architecture patterns.",
    ],
  },
  {
    name: "MGM College, Udupi",
    role: "BCA — Bachelor of Computer Applications",
    url: "https://mgm.ac.in",
    start: "2019",
    end: "2022",
    shortDescription: [
      "CGPA: 7.1 — Built a solid foundation in computer science fundamentals, data structures, algorithms, and database systems.",
      "Developed early projects in web development and explored backend technologies, sparking a passion for full-stack engineering.",
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const underline = document.querySelector<HTMLElement>(".underline");
    if (underline) underline.style.top = `${selected * 2.5}rem`;
  }, [selected]);

  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="title">
        <h2>Experience & Education</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline" />
          {experiences.map((exp, index) => (
            <li
              key={exp.name}
              className={`exp-slider-item ${index === selected ? "exp-slider-item-selected" : ""}`}
              onClick={() => setSelected(index)}
            >
              <span>{exp.name}</span>
            </li>
          ))}
        </ul>
        <motion.div
          className="exp-details"
          key={selected}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <a
                  href={experiences[selected].url}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experiences[selected].name}
                </a>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} — {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((desc, i) => (
                <li key={i} className="exp-details-list-item">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
