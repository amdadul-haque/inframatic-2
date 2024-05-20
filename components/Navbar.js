'use client'
import Link from 'next/link'
import React, { useState } from 'react'

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

  return (
    <>

      <div className='bg-white rounded-[30px] shadow px-10 xl:px-16 flex justify-between items-center'>
        <div className='flex items-center'>
          {/* <Image src='/home/logo.png' alt='logo' width={240} height={40} /> */}
          Logo
        </div>
        {/* <div className='flex gap-5'>
          {
            navLinks.map((link, index) => (
              <Link
                key={index} href={link.url}
                className={`text-gray-600 font-semibold mx-2 hover:text-gray-900 block py-8 border-b-[5px] border-transparent ${activeLink.id === link.id ? 'text-gray-900 border-b-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveLink(link)}
              >
                {link.name}
              </Link>
            ))
          }
        </div> */}
        <div className='flex gap-8'>
          {
            navLinks.map((link, index) => (
              <Link
                key={index} href={link.url}
                className={`relative text-gray-600 font-semibold mx-2 hover:text-gray-900 block py-8 border-transparent ${activeLink.id === link.id ? 'text-gray-900 active' : 'text-gray-600'}`}
                onClick={() => setActiveLink(link)}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 right-0 h-2 rounded ${activeLink.id === link.id ? 'bg-[#032962]' : 'bg-transparent'}`}></span>
              </Link>
            ))
          }
        </div>

        <div>
          Join
        </div>
      </div>
    </>
  )
}

export default Navbar