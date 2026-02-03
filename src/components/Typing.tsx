import React from 'react'
import {ReactTyped} from 'react-typed'
import {motion} from 'framer-motion'

export default function Typing(){

    return (
        <motion.div className="flex flex-col items-center justify-center h-[80vh] text-white md:text-4xl text-2xl font-bold font-mono" initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <h1>
        I am a{' '}
        <ReactTyped
          strings={[
            'Full Stack Developer',
            'Frontend Enthusiast',
            'Backend Specialist',
            'React Developer',
            'Next.js Developer',
            'TypeScript Enthusiast',            
            'API Integrator',
            'Tech Enthusiast'
          ]}
          typeSpeed={50}
          backSpeed={30}
          backDelay={1500}
          loop
          className="text-purple-300"
        />
      </h1>
    </motion.div>
    )
}