"use client";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FloatingNavProps {
  className?: string;
}

function FloatingNav({ className }: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [navWidth, setNavWidth] = useState("90%");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [blur, setBlur] = useState("0px");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      
      if (scrollYProgress.get() < 0.03) {
        setVisible(true);
        setNavWidth("82%");
        setBackgroundColor("transparent");
        setBlur("0px");
      } else {
        setVisible(direction >= 0);
        setNavWidth("60%");
        setBackgroundColor("rgb(13,13,13)");
        setBlur("90px");
      }
    }
  });

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/timeline", label: "Timeline" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "hidden sm:flex fixed z-[5000] text-white top-3 inset-x-0 mx-auto px-4 py-2 rounded-full items-center justify-between",
            className
          )}
          style={{
            borderRadius: "30px",
            width: navWidth,
            backgroundColor,
            backdropFilter: `blur(${blur})`,
            transition: "all 0.3s ease",
          }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744478313/aas/ctesbeldgb2whk3laln8.png"
              alt="logo"
              className="h-auto w-12 md:h-auto md:w-16"
            />
          </Link>

          <div className="flex items-center space-x-2 md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm md:text-base px-3 py-2 rounded-[20px] hover:bg-neutral-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a href="https://wa.me/message/EZXOC4IE7IU5K1" className="border text-sm md:text-base px-4 py-2 rounded-full relative hover:bg-white/10 transition-colors">
            <span>DM Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </a>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Navigation */}
      <div className="sm:hidden fixed z-[5000] w-full top-0">
        {/* Mobile Header */}
        <motion.div
          className="flex items-center justify-between px-4 py-3"
          animate={{ backgroundColor: isScrolled ? "rgba(13,13,13,0.9)" : "transparent" }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744478313/aas/ctesbeldgb2whk3laln8.png"
              alt="logo"
              className="h-8 w-12"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <motion.path
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { d: "M3 12h18M3 6h18M3 18h18" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                transition={{ duration: 0.2 }}
              />
            </svg>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="absolute top-full w-full bg-black/95 backdrop-blur-xl px-4 py-6"
            >
              <div className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a href="https://wa.me/message/EZXOC4IE7IU5K1" className="mt-4 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                  DM Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingNav;