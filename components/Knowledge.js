'use client'
import { knowledge } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { renderHighlightedText } from './libs/libs'

const Knowledge = () => {

  const [index, setIndex] = useState(0)
  const handleClick = () => {
    setIndex((prev) => prev + 1 === knowledge.sections.length ? 0 : prev + 1)
  }

  return (
    <div className='py-20 xl:pb-48 xl:pt-24 bg-sec-2 bg-gradient-to-r from-sec-1 to-prim-1 cursor-pointer'
      onClick={handleClick}
    >
      <div className='section-wrapper-sm'>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-5 xl:gap-20'>
          <div className='w-full flex flex-col items-center justify-center p-3'>
            <h1 className='section-title text-white-0 text-center'>{renderHighlightedText(knowledge.title)}</h1>
            <p className='text-white-0 pt-4 text-center max-w-[500px] sm:max-w-[600px]'>{renderHighlightedText(knowledge.description)} </p>
          </div>
        </div>
        {/* Added more space between the top text and the image */}
        <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-10 sm:gap-12 md:gap-16 xl:gap-20 mt-32'>
          <div className='w-full lg:1/2 flex justify-center lg:scale-150'>
            <div className='max-w-[90%] mx-auto relative'>
              <Image src={knowledge?.baseImage} alt='knowledge' width={500} height={500} className='' />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={knowledge?.sections[index].image} alt='knowledge' width={200} height={200}
                  className={`absolute left-1/2 translate-x-[-50%] md:h-[270px] lg:h-[300px] xl:h-[330px]
              ${index == 0 && 'top-[-18%] lg:top-[-15%]'} 
              ${index == 1 && 'h-[200px] top-[-10%] lg:top-[-10%]'} 
              ${index == 2 && 'top-[-30%]'}`}
                />
              </motion.div>
            </div>
          </div>
          <div className='w-full lg:1/2 flex flex-col items-center justify-center p-4 sm:p-4 md:p-6 xl:p-10'>
            <h2 className='section-title text-white-0 text-center'>{renderHighlightedText(knowledge.sections[index].title)}</h2>
            <p className='text-white-0 pt-8 text-center'>{renderHighlightedText(knowledge.sections[index].description)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Knowledge
