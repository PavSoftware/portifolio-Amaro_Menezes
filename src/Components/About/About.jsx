import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='w-full md:min-h-[1043px] py-[60px] h-full flex items-center justify-center bg-[#18052d] md:px-12 px-0'>
      <div className="container mx-auto px-4 md:px-0 flex flex-col items-center">

        {/* Header */}
        <motion.div
          className="flex items-center justify-center flex-col gap-6 mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#3e3e3e] to-[#f5f5f5] bg-clip-text text-transparent mt-18'>
            about
          </h3>

          <motion.p
            className="text-xl text-[#fafafa] font-josefin font-normal leading-7 max-w-[800px] w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am an electrician with hands-on field experience and also a junior backend developer seeking new and challenging opportunities. I have knowledge in Node.js and databases, and I focus on writing clean and functional code. I can quickly adapt to different technologies and tools as needed.

            Beyond programming, my experience as an electrician has taught me discipline, attention to detail, and the ability to solve problems efficiently. I am open to remote work and already have experience working with distributed teams.

            When I’m not coding or working on electrical projects, I enjoy being outdoors, going for walks, runs, or cycling. I would be happy to showcase my work and how my two experiences complement each other.

          </motion.p>
        </motion.div>

        {/* Skills / Image */}
        <motion.div
          className="max-w-[895px] w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img className="w-full h-full object-cover" src="/skill.png" alt="skills" />
        </motion.div>

      </div>
    </div>
  )
}

export default About
