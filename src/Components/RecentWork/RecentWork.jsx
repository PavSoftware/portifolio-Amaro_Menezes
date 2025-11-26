import React from 'react'
import { CiInstagram, CiTwitter } from 'react-icons/ci'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

function RecentWork() {
const projects = [
  { 
    id: 1, 
    img: "/work_1.jpg", 
    title: "API", 
    desc: "Desenvolvimento de uma API em Node.js para gestão de dados, com rotas simples, integração com base de dados e foco em performance e organização." 
  },
  { 
    id: 2, 
    img: "/work_2.webp", 
    title: "Esboço Elétrico", 
    desc: "Criação de esquemas elétricos funcionais para instalações residenciais e industriais, aplicando normas de segurança e planeamento técnico preciso." 
  },
  { 
    id: 3, 
    img: "/work_3.jpg", 
    title: "Hélices de Alta Tensão", 
    desc: "Trabalho realizado em sistemas de alta tensão com foco em ventilação e dissipação térmica, garantindo proteção e eficiência em ambientes elétricos sensíveis." 
  },
  { 
    id: 4, 
    img: "/work_4.jpg", 
    title: "PIC via Arduino", 
    desc: "Projeto experimental com Arduino para controlo de circuitos e automação básica, aplicando princípios de eletrónica e programação integrada." 
  },
];


  return (
    <div className='w-full py-[60px] bg-[#6e6e6e] flex items-center justify-center px-2 md:px-12'>
      <div className="container mx-auto flex flex-col gap-8">

        {/* Header */}
        <motion.div
          className="flex items-center justify-center flex-col gap-6 mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#f5f5f5] to-[#ffff] bg-clip-text text-transparent mt-18'>
            recent work
          </h3>
          <p className="text-xl text-[#fafafa] font-josefin font-normal">
            A collection of projects I've worked on.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col items-center justify-center gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`md:flex items-center justify-between gap-12 space-y-8 md:space-y-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Text wrapper */}
              <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='md:w-1/2 w-full space-y-6'>
                <h4 className='text-base text-[#5dffff] font-josefin font-semibold capitalize'>featured project</h4>
                <h2 className='text-3xl text-white font-josefin font-bold capitalize mt-4'>{project.title}</h2>
                <div className='mt-6 p-4 bg-gradient-to-r from-[#1e1e1e] to-[#f5f5f5] rounded-lg text-base text-[#fafafa] font-josefin font-normal'>
                  <p>{project.desc}</p>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                  <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} href='https://www.facebook.com/profile.php?id=61581624230968&sk=about' className='text-white text-xl'><FaFacebook /></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} href="https://www.instagram.com/amaro__menezes/" className='text-white text-xl'><CiInstagram /></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} href='https://wa.me/929100101' className='text-white text-xl'><FaWhatsapp /></motion.a>
                </div>
              </motion.div>

              {/* Image wrapper */}
              <motion.div
                className='md:w-1/2 w-full max-h-[341px] h-full shadow-lg shadow-[#000000] rounded-lg'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img className='w-full max-h-[341px] h-full object-cover rounded-lg' src={project.img} alt={project.title} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentWork
