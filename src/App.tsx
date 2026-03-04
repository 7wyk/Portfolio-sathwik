import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "@/components/Loader";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import Footer from "@/sections/Footer";

const Hero = lazy(() => import("@/sections/Hero"));
const About = lazy(() => import("@/sections/About"));
const Experience = lazy(() => import("@/sections/Experience"));
const Projects = lazy(() => import("@/sections/Projects"));
const Contact = lazy(() => import("@/sections/Contact"));

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const handleLoaderLoaded = () => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 450);
    };

    return (
        <div className="app">
            {showContent && (
                <>
                    <Navbar />
                    <SocialIcons />
                    <Email />
                    <main>
                        <Suspense fallback={null}>
                            <Hero />
                            <About />
                            <Experience />
                            <Projects />
                            <Contact />
                        </Suspense>
                    </main>
                    <Footer />
                </>
            )}
            <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
}

export default App;
