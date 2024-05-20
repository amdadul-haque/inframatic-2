'use client'
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'

const Hero = () => {

  const [hoverZone, setHoverZone] = useState(0);

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
  return (
    <>
      <div className='py-14 hero-bg'>
        <div className='section-wrapper flex flex-col gap-[200px]'>
          <Navbar />
          <div className='w-full flex justify-between items-center'>
            <div className='w-full lg:w-1/2'></div>
            <div className='w-full lg:w-1/2 relative border transition-all duration-300 ease-in-out' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <img src="/home/hero/square.svg" alt="square" className='mx-auto translate-y-32 z-[0]' />
              <img src="/home/hero/copilot.svg" alt="square" className={`hero-icons z-[1] ${hoverZone === 1 ? '-translate-y-10' : ''}`} />
              <img src="/home/hero/civil.svg" alt="civil" className={`hero-icons z-[2] ${hoverZone === 2 ? '-translate-y-8' : ''}`} />
              <img src="/home/hero/structural.svg" alt="structural" className={`hero-icons z-[3] ${hoverZone === 3 ? '-translate-y-14' : ''}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero