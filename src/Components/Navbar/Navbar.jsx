import { useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { RiCloseLargeLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full h-16 flex items-center justify-center absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-0">

        {/* Desktop Navbar */}
        <nav className='w-full flex items-center justify-center gap-10'>
          <div className="md:hidden flex items-center justify-center">
            <h1 className='text-xl text-white font-josefin font-semibold capitalize'>developer</h1>
          </div>

          <ul className='hidden md:flex items-center justify-center gap-10'>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>home</a></li>
            <li><a href="#" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>about</a></li>
            <li><a href="#"><div className='trapezioid'></div></a></li>
            <li><a href="#" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>work</a></li>
            <li><a href="#" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>contact</a></li>
          </ul>

          {/* Mobile toggle */}
          <div className='md:hidden flex items-center justify-center'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <MdMenuOpen className='text-3xl text-white cursor-pointer'/>
            </button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <motion.nav
          className='md:hidden fixed top-0 right-0 w-full h-screen bg-gradient-to-r from-[#f5f5f5] to-[#3e3e3e] flex flex-col items-center justify-center gap-10 z-50'
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <button onClick={() => setIsOpen(false)}>
            <RiCloseLargeLine className='text-3xl text-white cursor-pointer'/>
          </button>

          <ul className='flex flex-col items-center justify-center gap-10'>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>home</a></li>
            <li><a href="#" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>about</a></li>
            <li><a href="#" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>work</a></li>
            <li><a href="#" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>contact</a></li>
          </ul>
        </motion.nav>

      </div>
    </div>
  )
}

export default Navbar
