'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import FormModal from './FormModal'

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'Features',
      url: '#features'
    },
    {
      id: 3,
      name: 'Pricing',
      url: '#pricing'
    },
    {
      id: 4,
      name: 'About',
      url: '#about'
    },

    {
      id: 5,
      name: 'Contact',
      url: '#contact'
    }
  ]

  const [activeLink, setActiveLink] = useState(navLinks[0])

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>

      {isOpen && <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />}

      <div className='bg-white-0 rounded-[30px] shadow  md:px-10 xl:px-16 flex justify-between items-center mx-2'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src='/home/logo-light.svg' alt='logo' width={240} height={40} className='w-[80%] sm:w-auto lg:my-2' />
          </Link>
        </div>

        {/* <div className='flex gap-8'>
          {
            navLinks.map((link, index) => (
              <Link
                key={index} href={link.url}
                className={`relative text-black-2 mx-2 hover:text-sec-2  block py-8 border-transparent ${activeLink.id === link.id ? 'text-sec-2 font-semibold' : 'text-gray-600'}`}
                onClick={() => setActiveLink(link)}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 right-0 h-[6px] rounded ${activeLink.id === link.id ? 'bg-sec-2' : 'bg-transparent'}`}></span>
              </Link>
            ))
          }
        </div> */}

        <button
          // href={"#contact"}
          className='md:hover:bg-prim-3 md:hover:text-prim-1 transition-all duration-300 group flex md:gap-4 items-center lg:px-[22px] py-[14px] rounded-full text-sec-1 font-medium text-sm md:text-base'
          onClick={() => setIsOpen(true)}
        >

          <span>Join the Pioneer Program</span>
          <span className='w-8 overflow-hidden rounded-full bg-sec-1 hidden md:inline-block'>
            <motion.span className='flex w-16 h-8 rounded-full transition-colors duration-300 text-center items-center justify-around group-hover:bg-prim-1'
              initial={{ x: -32 }}
              whileHover={{ x: 0, backgroundColor: '#2496BE' }}
              transition={{ duration: .3 }}
            >
              <BsArrowRight className='text-white-0 text-2xl' />
              <BsArrowRight className='text-white-0 text-2xl' />
            </motion.span>
          </span>
        </button>

      </div>
    </>
  )
}

export default Navbar