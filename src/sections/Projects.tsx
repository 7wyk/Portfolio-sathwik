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
     projectName: "NextHire AI-Recruitment Automation Platform",
projectDescription:
"An AI-powered recruitment automation platform built with the MERN stack that streamlines the hiring pipeline. Features AI resume screening using Groq LLaMA3, a conversational AI interviewer for real-time candidate evaluation, and coding assessments executed securely through Judge0 sandbox environments. Implements semantic candidate search with Pinecone vector embeddings, real-time notifications via Socket.IO, and secure JWT authentication with refresh token rotation.",
projectTech: [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.IO",
  "Tailwind CSS",
  "Zustand",
  "Groq LLaMA3 API",
  "LangChain",
  "Judge0 API",
  "Pinecone Vector DB",
  "AWS S3",
  "JWT Authentication"
],
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
    projectName: "Skillify-AI-Powered Learning Platform",
    projectDescription:
    "A role-based e-learning platform built on the MERN stack, enabling instructors to create courses and students to enroll, features role-based dashboards, video streaming, and AI quiz generations. Implements JWT authentication and RBAC via Node.js, Express, and MongoDB — engineered for security and scale.",
    projectTech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary", "OpenRouter API"],
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
    projectName: "SignSpeak AI | Real-Time Sign Language Translation System",
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
      "/assets/images/project-4-1.png",
      "/assets/images/project-4-2.png",
      "/assets/images/project-4-3.png",
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
