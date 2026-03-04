import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: { isLoading: boolean; setIsLoading: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading();
    }, 1900);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, scale: 0.9 }}
          key="loader"
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>S</title>
            <g>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                exit={{ scale: 2, opacity: 0 }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                d="M 50, 5
                   L 11, 27
                   L 11, 72
                   L 50, 95
                   L 89, 73
                   L 89, 28 z"
              />
              <motion.text
                x="50"
                y="58"
                textAnchor="middle"
                fill="currentColor"
                fontSize="32"
                fontFamily="Fira Code, monospace"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                S
              </motion.text>
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
