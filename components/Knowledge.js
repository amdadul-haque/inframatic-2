'use client'
import { knowledge } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { renderHighlightedText } from './libs/libs'
import PioneerButton from './libs/PioneerButton'

const Knowledge = () => {

  const [index, setIndex] = useState(0)
  const handleClick = () => {
    setIndex((prev) => prev + 1 === knowledge.sections.length ? 0 : prev + 1)
  }

  return (
    <div className='py-20 pb-0 pt-[220px] xl:pt-32 bg-sec-2 bg-gradient-to-r from-sec-1 to-prim-1 cursor-pointer'
      onClick={handleClick}
    >
      <div className='section-wrapper-sm'>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-5 xl:gap-20 mt-10'>
          <div className='w-full flex flex-col items-center justify-center p-3'>
            <h1 className='section-title text-white-0 text-center'>{renderHighlightedText(knowledge.title)}</h1>
            <p className='text-white-0 pt-4 text-center max-w-[500px] sm:max-w-[600px]'>{renderHighlightedText(knowledge.description)} </p>
          </div>
        </div>
        {/* Added more space between the top text and the image */}
        <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-10 sm:gap-12 md:gap-16 xl:gap-20 mt-32 xl:mt-60'>
          <div className='w-full lg:1/2 flex justify-center lg:scale-150'>
            <div className='max-w-[90%] mx-auto relative'>
              <Image src={knowledge?.baseImage} alt='knowledge' width={500} height={500} className='' />
              <Image src={knowledge?.sections[index].image} alt='knowledge' width={200} height={200}
                className={`absolute left-1/2 translate-x-[-50%] md:h-[270px] lg:h-[300px] xl:h-[330px]
              ${index == 0 && 'top-[-18%] lg:top-[-15%]'} 
              ${index == 1 && 'h-[200px] top-[-10%] lg:top-[-10%]'} 
              ${index == 2 && 'top-[-30%]'}`}
              />
            </div>
          </div>
          <div className='w-full lg:1/2 flex flex-col items-center justify-center p-4 sm:p-4 md:p-6 xl:p-10'>
            <h2 className='section-title text-white-0 text-center'>{renderHighlightedText(knowledge.sections[index].title)}</h2>
            <p className='text-white-0 pt-8 text-center'>{renderHighlightedText(knowledge.sections[index].description)}</p>
            <div className='w-full mt-8'>
              <div className='flex justify-center md:justify-start'>
                <PioneerButton link='#' isHover={true} />
              </div>
              <div className='flex justify-center md:justify-end'>
                <Image src="/home/contact-us/matic.png" alt="matic" height={200} width={300} className='mt-6 md:mt-0 md:translate-y-[-30%] md:hover:translate-y-[-40%] transition h-[200px] w-auto' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Knowledge
