"use client";

import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 400);
      }, 100); // debounce
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          aria-label="برو به بالای صفحه"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 bg-customeBlue text-white p-3 rounded-full shadow-lg hover:bg-customeOrange focus:outline-none"
        >
          <IoMdArrowUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export { GoToTop };
