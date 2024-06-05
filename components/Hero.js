'use client'
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { hero, marqueeTexts } from '@/data';
import Link from 'next/link';
import { renderHighlightedText } from './libs/libs';

const Hero = () => {

  const [hoverZone, setHoverZone] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);



  const handleMouseMove = (e) => {
    const { top, height } = e.target.getBoundingClientRect();
    const hoverHeight = (e.clientY - top) / height;

    if (hoverHeight < 0.33) {
      setHoverZone(1);
    } else if (hoverHeight < 0.67) {
      setHoverZone(2);
    } else {
      setHoverZone(3);
    }
  };

  const handleMouseLeave = () => {
    setHoverZone(0);
  };

  const customEase = [1, 0, 0, 1];


  const [yValues, setYValues] = useState([])

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setYValues([0, -96, -192, -288, -384, -480, 0])
    }
    else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      setYValues([0, -88, -176, -264, -352, -440, 0])
    }
    else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setYValues([0, -80, -160, -240, -320, -400, 0])
    }
    else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      setYValues([0, -72, -144, -216, -288, -360, 0])
    }
    else {
      setYValues([0, -60, -120, -180, -240, -300, 0])
    }
  }, [])




  return (
    <>
      <div className='py-12 md:py-34 pb-[250px] lg:pb-48 hero-bg bg-gradient-to-tr from-transparent to-prim-3/70 relative'>
        <div className='section-wrapper flex flex-col gap-28 md:gap-24'>
          <Navbar />
          <div className='w-full flex flex-col-reverse gap-10 lg:flex-row justify-between items-center'>
            <div className='w-[90%] lg:w-1/2 max-w-[416px] sm:max-w-auto mx-auto mt-14 lg:mt-0'>
              <h2 className='text-sec-2 text-[40px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold'>{hero?.title}</h2>
              <div className='text-prim-2 text-[40px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold h-16 lg:h-20 xl:h-24 overflow-hidden mb-3 mt-2'>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: yValues,
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      times: [0, 0.17, 0.34, 0.51, 0.68, 0.85, 1],
                      ease: customEase
                    }
                  }}
                >
                  {hero?.marqueeTexts.map((text, index) => (
                    <motion.span className='block' key={index}>
                      {text}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              <div>
                <p className=''>{renderHighlightedText(hero?.description)}</p>
                <p className='mt-3'>{renderHighlightedText(hero?.description2)}</p>
              </div>
              <div>
                <Link
                  href={'#contact'}
                  className='bg-white-0 inline-flex gap-4 items-center px-[22px] py-[14px] rounded-full mt-5 text-sec-1 font-medium text-base'>
                  Join the Pioneer Program
                  <span className='inline-block w-8 overflow-hidden rounded-full bg-sec-1 '>
                    <motion.span className='flex w-16 h-8 rounded-full transition-colors duration-300 text-center items-center justify-around'
                      initial={{ x: -32 }}
                      whileHover={{ x: 0, backgroundColor: '#2496BE' }}
                      transition={{ duration: .3 }}
                    >
                      <BsArrowRight className='text-white-0 text-2xl' />
                      <BsArrowRight className='text-white-0 text-2xl' />
                    </motion.span>
                  </span>
                </Link>
              </div>
            </div>
            <div className='w-[90%] sm:max-w-[400px] lg:max-w-full lg:w-1/2 relative transition-all duration-300 ease-in-out' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <img src="/home/hero/square.svg" alt="square" className='mx-auto translate-y-[30%] xl:translate-y-[20%] z-[0] scale-[1.18] xl:scale-100' />
              <img src="/home/hero/shadow.svg" alt="shadow" className='mx-auto hero-icons translate-y-[60%] xl:translate-y-[50%]' />

              <img src="/home/hero/copilot.svg" alt="square" className={`hero-icons z-[1] ${hoverZone === 1 ? '-translate-y-10' : ''}`} />
              <img src="/home/hero/civil.svg" alt="civil" className={`hero-icons z-[2] ${hoverZone === 2 ? '-translate-y-8' : ''}`} />
              <img src="/home/hero/structural.svg" alt="structural" className={`hero-icons z-[3] ${hoverZone === 3 ? '-translate-y-14' : ''}`} />
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 translate-y-[50%] left-0 right-0 mx-auto rounded '>
          <div className='w-auto drop-shadow-xl mx-auto p-5 max-w-[1000px] rounded-[20px]'>
            <div className='grid grid-cols-2 lg:grid-cols-4 bg-gradient-to-tr from-prim-2 to to-prim-1 rounded-xl'>
              {
                hero.cards.map((card, index) => (
                  <div key={index} className='flex flex-col gap-5 items-center group hover:bg-sec-1 transition px-3 py-6 md:first:rounded-s-xl md:last:rounded-e-xl'>
                    <div className='bg-sec-1 w-10 h-10 rounded-full flex items-center justify-center'>
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <div>
                      <h3 className='text-black-1 group-hover:text-white-0 transition font-bold text-lg text-center'>{card.title}</h3>
                      <p className='text-black-1 group-hover:text-white-0 transition text-sm text-center'>{card.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Hero