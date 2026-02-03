"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const router = useRouter();

    const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
            smoothScrollTo(targetPosition);
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 767px)');
        setIsMobile(mql.matches);
        const handleChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };
        mql.addEventListener('change', handleChange);
        return () => mql.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className="flex justify-center" id="home">
            <nav className={`py-5 sticky px-4 m-8 mb-0 w-[80vw] rounded-lg bg-black bg-opacity-10 backdrop-blur-md text-white shadow-lg z-10 flex justify-between transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-10'} font-mono text-2xl`}>
                <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => {
                        router.push('/');
                    }}
                >
                   Govardhan Sahani
                </button>

                <button
                    type="button"
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                <AnimatePresence>
                    {(isMenuOpen || !isMobile) && (
                        <motion.ul
                            initial={isMobile ? { opacity: 0, x: 200 } : false}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute md:relative top-full right-0 md:top-auto md:right-auto flex flex-col md:flex-row justify-center items-center gap-13 bg-black bg-opacity-50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-5 md:p-0 rounded-lg md:rounded-none w-[200px] md:w-auto">
                            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('home')}>Home</li>
                            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('about')}>About</li>
                            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('projects')}>Projects</li>
                            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('contact')}>Contact Me</li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}