import React from "react";
import { motion } from "framer-motion";
import ProjectCard, { ProjectData } from "@/components/ProjectCard";

const projectsData: ProjectData[] = [
  {
    images: [
      "/assets/images/project-1-1.png",
      "/assets/images/project-1-2.png",
      "/assets/images/project-1-3.png",
    ],
    projectName: "Skillify",
    projectDescription:
      "A role-based e-learning platform built on the MERN stack, enabling instructors to create courses and students to enroll, track progress, and take quizzes. Implements JWT authentication and RBAC via Node.js, Express, and MongoDB — engineered for security and scale.",
    projectTech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    projectExternalLinks: {
      github: "https://github.com/7wyk",
      externalLink: "",
    },
  },
  {
    images: [
      "/assets/images/project-2-1.png",
      "/assets/images/project-2-2.png",
      "/assets/images/project-2-3.png",
    ],
    projectName: "SignSpeak AI",
    projectDescription:
      "A real-time sign language translation system leveraging MediaPipe hand-landmark detection and a Scikit-learn classifier achieving sub-200ms prediction latency at 30 FPS. Features a multilingual TTS backend (Hindi, Kannada, Malayalam) and a glassmorphism React frontend with protected routes.",
    projectTech: ["Flask", "MediaPipe", "Scikit-learn", "React (Vite)", "Framer Motion", "Google Translate API"],
    projectExternalLinks: {
      github: "https://github.com/7wyk",
      externalLink: "",
    },
  },
  {
    images: [
      "/assets/images/project-3-1.png",
      "/assets/images/project-3-2.png",
      "/assets/images/project-3-3.png",
    ],
    projectName: "MediQuery AI",
    projectDescription:
      "An RAG-powered medical chatbot where users upload documents for intelligent retrieval and summarization using Groq's LLaMA3-70B. Built with a FastAPI backend supporting document ingestion and chat history, and a React frontend with real-time streaming responses via Pinecone vector search.",
    projectTech: ["React.js", "FastAPI", "Groq (LLaMA3-70B)", "LangChain", "Pinecone", "Google Generative AI"],
    projectExternalLinks: {
      github: "https://github.com/7wyk",
      externalLink: "",
    },
  },
  {
    images: [
      "/assets/images/project-4-1.png",
      "/assets/images/project-4-2.png",
      "/assets/images/project-4-3.png",
    ],
    projectName: "Twitify",
    projectDescription:
      "A full-stack social microblogging platform with tweet management, image uploads, and a glassmorphic UI. Built with Django REST Framework for token-authenticated APIs and a React 18 frontend, demonstrating clean separation of concerns across a modern full-stack architecture.",
    projectTech: ["Django 4.2+", "Django REST Framework", "Token Auth", "SQLite", "React 18", "React Router"],
    projectExternalLinks: {
      github: "https://github.com/7wyk",
      externalLink: "",
    },
  },
  {
    images: [
      "/assets/images/project-5-1.png",
      "/assets/images/project-5-2.png",
      "/assets/images/project-5-3.png",
    ],
    projectName: "SkillMatch AI",
    projectDescription:
      "An AI-powered SaaS resume analyzer that evaluates ATS compatibility, keyword optimization, and grammar quality in real-time. Features interactive analytics dashboards with Recharts, smooth Framer Motion animations, and a modern fintech-inspired UI. Built with a scalable Express backend and modular React frontend architecture.",
    projectTech: ["React (Vite)", "Tailwind CSS", "Framer Motion", "Recharts", "Node.js", "Express.js", "Lucide React"],
    projectExternalLinks: {
      github: "https://github.com/7wyk",
      externalLink: "",
    },
  },
];


const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Projects() {
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        <h2>Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.projectName} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
