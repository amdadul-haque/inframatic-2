'use client'
import { contact } from '@/data'
import React, { useState } from 'react'
import { BsArrowRight, BsChevronRight } from 'react-icons/bs';
import { toast } from "react-toastify";
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromMail: email,
          name: name,
          message: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      toast.success('Email Sent Successfully');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <div className='py-40' id='contact'>
      <div className='section-wrapper-sm rounded-xl sm:rounded-2xl md:rounded-3xl xl:rounded-[34px] p bg-gradient-to-r from-sec-1 to-prim-1'>
        <div className={`w-full flex flex-col-reverse md:flex-row justify-between items-center gap-10 px-16 xl:pl-32 relative pb-10 lg:pb-0 lg:h-[383px]`}>
          <div className='max-w-[410px]'>
            <h2 className='text-2xl md:text-3xl text-white-0'>{contact?.title}</h2>
            <p className='text-white-0 my-5'>{contact?.description}</p>
            <form onSubmit={handleButtonClick} className="flex flex-col gap-4 sm:gap-8">
              <div className='relative'>
                {/* <h3 className="mb-2 text-base">Email *</h3> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full form-textarea py-4 px-4 pl-14 outline-none focus:ring-[1px] focus:ring-brand-1 focus:ring-opacity-50 rounded-full bg-black-1 text-white-3"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='inline-block w-8 overflow-hidden rounded-full bg-prim-1 absolute right-5 top-3 scale-[1.15] disabled:cursor-not-allowed'
                  disabled={email === ""}
                  onClick={email != "" && handleButtonClick}
                >
                  <motion.span className='flex w-16 h-8 rounded-full transition-colors duration-300 text-center items-center justify-around'
                    initial={{ x: -32 }}
                    whileHover={{ x: 0, backgroundColor: '#00215A' }}
                    transition={{ duration: .3 }}
                  >
                    <BsChevronRight className='text-white-0 text-xl' />
                    <BsChevronRight className='text-white-0 text-xl' />
                  </motion.span>
                </button>
                <img src="./home/contact-us/mail.svg" alt="" className='absolute left-5 top-4' />
              </div>
            </form>
          </div>
          <div className='lg:max-w-1/2 md:absolute bottom-0 right-10 lg:w-[433px] lg:h-[485px] overflow-hidden' >
            <img
              src="./home/contact-us/matic.png"
              alt="matic"
              className='object-contain md:translate-y-[18%] hover:translate-y-[0%] transition-transform duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs