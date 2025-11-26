import React from 'react'
import { CiFacebook, CiTwitter } from 'react-icons/ci'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Footer() {
  let date = new Date().getFullYear()

  return (
    <div className='w-full pt-10 bg-[#6e6e6e] flex items-center justify-center px-12'>
      <div className="container mx-auto">

        <motion.div
          className="flex items-center justify-between gap-10 w-full border-t border-[#fafafa] py-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className='font-josefin text-white'>{date} <strong>PavSoftware&copy;</strong>, All rights reserved  <p><strong>design by: </strong>Lifeonthecode&copy;</p></p>

          <div className='flex items-center gap-4'>
            <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} href="https://github.com/PavSoftware?tab=repositories" className='text-white text-xl'><FaGithub/></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} href="https://www.facebook.com/profile.php?id=61579999976979&locale=pt_BR" className='text-white text-xl'><CiFacebook/></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} href="https://www.instagram.com/ronaldobernardo94/" className='text-white text-xl'><FaInstagram/></motion.a>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Footer
