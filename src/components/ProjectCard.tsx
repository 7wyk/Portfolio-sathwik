import React, { useState, useEffect } from "react";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectData {
    /** Pass a single image or an array of up to 3 screenshots */
    image?: string;
    images?: string[];
    projectName: string;
    projectDescription: string;
    projectTech: string[];
    projectExternalLinks: {
        github: string;
        externalLink: string;
    };
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 60 : -60,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -60 : 60,
        opacity: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    }),
};

function ImageCarousel({
    images,
    projectName,
}: {
    images: string[];
    projectName: string;
}) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);
    const [errors, setErrors] = useState<Record<number, boolean>>({});

    // Auto-rotate every 3.5 s unless paused or only 1 image
    useEffect(() => {
        if (images.length <= 1 || paused) return;
        const id = setInterval(() => {
            setDirection(1);
            setCurrent((c) => (c + 1) % images.length);
        }, 3500);
        return () => clearInterval(id);
    }, [images.length, paused]);

    const go = (dir: number) => {
        setDirection(dir);
        setCurrent((c) => (c + dir + images.length) % images.length);
    };

    return (
        <div
            className="project-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Slides */}
            <div className="project-carousel-track">
                <AnimatePresence custom={direction} mode="sync">
                    <motion.div
                        key={current}
                        className="project-carousel-slide"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        style={{ position: "absolute", inset: 0 }}
                    >
                        {errors[current] ? (
                            <div className="project-image-placeholder">
                                <span>{projectName.charAt(0)}</span>
                            </div>
                        ) : (
                            <img
                                src={images[current]}
                                alt={`${projectName} screenshot ${current + 1}`}
                                onError={() => setErrors((e) => ({ ...e, [current]: true }))}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Nav arrows — only show when > 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        className="project-carousel-btn project-carousel-btn--prev"
                        onClick={(e) => { e.stopPropagation(); go(-1); }}
                        aria-label="Previous screenshot"
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        className="project-carousel-btn project-carousel-btn--next"
                        onClick={(e) => { e.stopPropagation(); go(1); }}
                        aria-label="Next screenshot"
                    >
                        <FiChevronRight />
                    </button>

                    {/* Dot indicators */}
                    <div className="project-carousel-dots">
                        {images.map((_, i) => (
                            <motion.button
                                key={i}
                                className={`project-carousel-dot ${i === current ? "project-carousel-dot--active" : ""}`}
                                onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                whileHover={{ scale: 1.4 }}
                                transition={{ duration: 0.15 }}
                                aria-label={`Screenshot ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Teal image overlay (lifted on hover) */}
            <div className="project-image-overlay" />
        </div>
    );
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const { image, images, projectName, projectDescription, projectTech, projectExternalLinks } = project;

    // Normalise: support both `image` (single) and `images` (array)
    const slideImages: string[] = images && images.length > 0
        ? images
        : image
            ? [image]
            : [`/assets/images/project-${index + 1}-1.png`];

    return (
        <motion.div
            className="project"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
        >
            {/* Image carousel */}
            <div className="project-image">
                <div className="project-image-container">
                    <ImageCarousel images={slideImages} projectName={projectName} />
                </div>
            </div>

            {/* Project info */}
            <div className="project-info">
                <p className="project-info-overline">Featured Project</p>
                <h3 className="project-info-title">{projectName}</h3>
                <div className="project-info-description">
                    <p>{projectDescription}</p>
                </div>
                <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                        <li className="project-info-tech-list-item" key={tech}>
                            {tech}
                        </li>
                    ))}
                </ul>
                <ul className="project-info-links">
                    {projectExternalLinks.github && (
                        <li className="project-info-links-item">
                            <a
                                href={projectExternalLinks.github}
                                className="project-info-links-item-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub />
                            </a>
                        </li>
                    )}
                    {projectExternalLinks.externalLink && (
                        <li className="project-info-links-item">
                            <a
                                href={projectExternalLinks.externalLink}
                                className="project-info-links-item-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
