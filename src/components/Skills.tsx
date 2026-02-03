import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    "HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Node.js","Express.js","MongoDB","PostgreSQL","Prisma ORM","WebSockets",'Docker','Git','Github','Monorepo & Turborepo'
  ];

  // Define variants for the container and individual skills
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each skill animation
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0, // Slide to original position
      transition: {
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="text-white px-7 pt-20 my-80 md:my-0 h-[70vh]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <p className="text-3xl font-bold pb-2 font-mono">Skills:</p>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <motion.div key={skill} variants={skillVariants}>
            <Skill skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}