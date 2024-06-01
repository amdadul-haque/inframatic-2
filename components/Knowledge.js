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
    <div className='py-52 pt-60 bg-sec-2 bg-gradient-to-r from-sec-1 to-prim-1 cursor-pointer'
      onClick={handleClick}
    >
      <div className='section-wrapper-sm'>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-20'>
          <div className='w-full flex flex-col items-center justify-center p-10'>
            <h1 className='section-title text-white-0 text-center'>{knowledge.title}</h1>
            <p className='text-white-0 pt-4 text-center'>{knowledge.description}</p>
          </div>
        </div>
        {/* Added more space between the top text and the image */}
        <div className='mt-20 w-full flex flex-col lg:flex-row lg:justify-between gap-20'>
          <div className='w-full lg:1/2 flex justify-center lg:scale-150'>
            <div className='max-w-[90%] mx-auto relative'>
              <Image src={knowledge?.baseImage} alt='knowledge' width={500} height={500} className='' />
              <Image src={knowledge?.sections[index].image} alt='knowledge' width={250} height={250}
                className={`absolute left-1/2 translate-x-[-50%] md:h-[270px] lg:h-[280px] xl:h-[300px]
              ${index == 0 && 'top-[-18%] lg:top-[-15%]'} 
              ${index == 1 && 'h-[200px] top-[-5%]'} 
              ${index == 2 && 'top-[-30%]'}`}
              />
            </div>
          </div>
          <div className='w-full lg:1/2 flex flex-col items-center justify-center p-10'>
            <h2 className='section-title text-white-0 text-center'>{knowledge.sections[index].title}</h2>
            <p className='text-white-0 pt-8 text-center'>{knowledge.sections[index].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Knowledge
