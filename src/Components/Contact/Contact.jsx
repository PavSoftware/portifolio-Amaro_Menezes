import React, { useRef } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast'

function Contact() {
const formRef = useRef()

const handleSubmit = (e) => {
e.preventDefault()


emailjs.sendForm(
  'service_inrjno9', 
  'template_ennknfh',   
  formRef.current,
  'hAWb6T5LGIqXFH8n2'       
).then(
  (result) => {
    toast.success('Mensagem enviada com sucesso!')
    e.target.reset()
  },
  (error) => {
   toast.error('Erro ao enviar a mensagem. Tente novamente.')
  }
)


}

return ( <div className='w-full py-[60px] bg-[#6e6e6e] flex items-center justify-center md:px-12'> <div className="container mx-auto">

    {/* Header */}
    <motion.div
      className="flex items-center justify-center flex-col gap-6 mb-10"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className='text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#fafafa] to-[#f9f9f9] bg-clip-text text-transparent mt-18'>
        Contact
      </h3>
    </motion.div>

    <div className="md:flex justify-between gap-10 space-y-10 md:space-y-0">

      {/* Left text wrapper */}
      <motion.div
        className='md:w-1/2 w-full space-y-6 px-4 md:px-0'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='text-4xl text-[#f6f5f8] font-josefin font-semibold'>drop me a message</h3>
        <p className='text-lg text-[#fafafa] font-josefin font-normal leading-7'>A web landing page to connect directly with me and access personalized information…</p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <button className='bg-gradient-to-r from-[#3e3e3e] to-[#f5f5f5] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white font-josefin font-semibold'>
              <BsFillTelephoneFill />
            </button>
            <p className='text-base text-[#fafafa] font-josefin font-normal'>+244 929100101</p>
          </div>
          <div className="flex items-center gap-3">
            <button className='bg-gradient-to-r from-[#3e3e3e] to-[#f5f5f5] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white font-josefin font-semibold'>
              <FaMailBulk />
            </button>
            <p className='text-base text-[#fafafa] font-josefin font-normal'><a href="mailto:comercialpavsoftware@gmail.com">comercialpavsoftware@gmail.com</a></p>
          </div>
          <div className="flex items-center gap-3">
            <button className='bg-gradient-to-r from-[#3e3e3e] to-[#f5f5f5] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white font-josefin font-semibold'>
              <IoLocationSharp />
            </button>
            <p className='text-base text-[#fafafa] font-josefin font-normal'>Luanda Viana, KM9A Grafanil</p>
          </div>
        </div>
      </motion.div>

      {/* Right form wrapper */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className='md:w-1/2 w-full flex flex-col gap-6 rounded-3xl p-6 shadow-xl shadow-[#fafafa]'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className='text-base text-white font-josefin font-medium capitalize'>Nome</label>
          <input name="name" className='w-full h-[48px] border border-[#fafafa] bg-none rounded-3xl pl-3 placeholder-white text-white font-josefin font-medium' type="text" placeholder='Name' id='name' required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className='text-base text-white font-josefin font-medium capitalize'>Email</label>
          <input name="email" className='w-full h-[48px] placeholder-white text-white font-josefin font-medium border border-[#fafafa] bg-none rounded-3xl pl-3' type="email" placeholder='Email' id='email' required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className='text-base text-white font-josefin font-medium capitalize'>Message</label>
          <textarea name="message" className='w-full min-h-[100px] pt-3 h-full border border-[#fafafa] bg-none rounded-3xl placeholder-white text-white font-josefin font-medium pl-3' placeholder='How can I help you' id='message' required/>
        </div>

        <button type="submit" className='bg-gradient-to-r from-[#3e3e3e] to-[#f5f5f5] w-full h-[48px] rounded-3xl text-white font-josefin font-semibold'>
          Enviar
        </button>
      </motion.form>

    </div>
  </div>
</div>


)
}

export default Contact
