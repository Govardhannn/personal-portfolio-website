"use client"
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="flex flex-col items-center justify-self-start md:h-[70vh] h-[100vh] text-white md:text-4xl text-2xl font-bold font-mono px-7"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <h1>
        About me:
        <br />
        <ReactTyped
          strings={[
            `I\’m a full-stack developer who loves turning ideas into fast, scalable,
             and user-friendly web applications. I work with technologies like Next.js, React,
              Node.js, and TypeScript to build projects that combine clean design with solid functionality.
              I\’ve built over Multiple Projects — including a real-time chat app, Backend of TY,Leedcode Full-stack app , SpaceXplore-project and a movie-booking-app 
               I was also recognized as a Super Contributor at Hacktoberfest, which encouraged me to keep 
               contributing and collaborating with the developer community. My goal is to keep improving
                my craft and build products that make an impact.`,
          ]}
          typeSpeed={10}
          className="text-purple-300 text-2xl"
        />
      </h1>
    </motion.div>
  );
}
