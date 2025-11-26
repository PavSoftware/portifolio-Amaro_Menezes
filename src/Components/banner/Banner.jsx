import React from 'react'
import { motion } from 'framer-motion'

function Banner() {

  const handleSubmit = (e) => {
    // Handle form submission logic here
    const number = "+244929100101"
    const message = "Olá, gostaria de saber mais sobre os teus serviços."
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

  }

  return (
    <div className='w-full min-h-[880px] h-full bg-[#18052d] bg-[url("/bg.png")] bg-cover bg-no-repeat flex items-center justify-center relative px-2 md:px-12'>
      <div className="container mx-auto flex items-center justify-between gap-8">

        {/* Text wrapper */}
        <div className='max-w-[612px] w-full space-y-6 relative z-20'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className='text-3xl text-white font-josefin font-semibold capitalize'
          >
            Hi, I'm Amaro Menezes
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#3e3e3e] to-[#f5f5f5] bg-clip-text text-transparent'
          >
            Electrician & Technician
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-lg text-[#fafafa] font-josefin font-normal leading-8'
          >
           self-taught electrician with 5+ years of experience, I install, repair, and maintain electrical systems with precision. I focus on reliable wiring, efficient layouts, and clean work, ensuring strong performance that meets client needs and standards.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={handleSubmit}
            className='bg-gradient-to-r from-[#f5f5f5] to-[#3e3e3e] py-2 px-6 rounded-3xl text-lg text-white font-josefin font-semibold capitalize  transition hover:text-blue-600'
          >
            contact
          </motion.button>
        </div>

        {/* Image wrapper */}
        <div className='absolute md:right-10 bottom-0'>
          <motion.img
            src="./logo.jpeg"
            alt=""
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='md:max-w-[750px] w-full min-h-[300px] h-[700px] object-cover'
          />
        </div>

      </div>
    </div>
  )
}

export default Banner
