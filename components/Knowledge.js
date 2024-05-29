'use client'
import { knowledge } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'

const Knowledge = () => {

  const [index, setIndex] = useState(0)
  const handleClick = (index) => {
    setIndex((prev) => prev + 1 === knowledge.sections.length ? 0 : prev + 1)
  }
  return (
    <div className='py-52 pt-60 bg-sec-2 bg-gradient-to-r from-sec-1 to-prim-1'>
      <div className='section-wrapper-sm'>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-20'
          onClick={handleClick}
        >
          <div className='w-full lg:1/2 relative scale-150'>
            <Image src={knowledge?.baseImage} alt='knowledge' width={500} height={500} className='' />
            <Image src={knowledge?.sections[index].image} alt='knowledge' width={300} height={300} className={` absolute left-[80px] top-[-60px] ${index == 1 && 'h-[200px] left-[100px] top-[-10px]'} ${index == 2 && 'top-[-20px]'}`} />
          </div>
          <div className='w-full lg:1/2 flex flex-col items-center justify-center p-10'>
            <h2 className='section-title text-white-0 text-center'>{knowledge.sections[index].title}</h2>
            <p className=' text-white-0 pt-8 text-center'>{knowledge.sections[index].description}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Knowledge