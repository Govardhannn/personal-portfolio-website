"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  // Menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Media query state (initialized correctly)
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 767px)").matches
  );

  // 🔹 Subscribe to media query changes (VALID effect)
 useEffect(() => {
  const mql = window.matchMedia("(max-width: 767px)");

  const handleChange = (e: MediaQueryListEvent) => {
    setIsMobile(e.matches); // ✅ allowed (callback)
  };

  mql.addEventListener("change", handleChange);

  return () => {
    mql.removeEventListener("change", handleChange);
  };
}, []);


  // 🔹 Smooth scroll
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center" id="home">
      <motion.nav
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-5 sticky px-4 m-8 mb-0 w-[80vw] rounded-lg bg-black bg-opacity-10 backdrop-blur-md text-white shadow-lg z-10 flex justify-between font-mono text-2xl"
      >
        {/* Logo */}
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          Govardhan Sahani
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menu */}
        <AnimatePresence>
          {(isMenuOpen || !isMobile) && (
            <motion.ul
              initial={isMobile ? { opacity: 0, x: 200 } : false}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute md:relative top-full right-0 md:top-auto md:right-auto
                flex flex-col md:flex-row items-center gap-8
                bg-black bg-opacity-50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
                p-5 md:p-0 rounded-lg md:rounded-none w-[200px] md:w-auto"
            >
              {["home", "about", "projects", "contact"].map((item) => (
                <li
                  key={item}
                  className="hover:underline cursor-pointer"
                  onClick={() => handleScroll(item)}
                >
                  {item === "contact" ? "Contact Me" : item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
