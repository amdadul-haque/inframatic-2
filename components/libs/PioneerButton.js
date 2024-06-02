'use client'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const PioneerButton = ({ link, isHover }) => {
  return (
    <Link
      href={link || '/'}
      className={`bg-white-0 inline-flex gap-4 items-center px-[22px] py-[14px] rounded-full mt-5 text-sec-1 font-medium text-base group
      ${isHover && 'md:hover:bg-prim-3 md:hover:text-prim-1'}`}>
      Join the Pioneer Program
      <span className='inline-block w-8 overflow-hidden rounded-full bg-sec-1 '>
        <motion.span className={`flex w-16 h-8 rounded-full transition-colors duration-300 text-center items-center justify-around  ${isHover && 'group-hover:bg-prim-1'}`}
          initial={{ x: -32 }}
          whileHover={{ x: 0, backgroundColor: '#2496BE' }}
          transition={{ duration: .3 }}
        >
          <BsArrowRight className='text-white-0 text-2xl' />
          <BsArrowRight className='text-white-0 text-2xl' />
        </motion.span>
      </span>
    </Link>
  )
}

export default PioneerButton