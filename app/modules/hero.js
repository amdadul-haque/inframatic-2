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
      <div className='py-14 hero-bg pb-24'>
        <div className='section-wrapper flex flex-col gap-[200px]'>
          <Navbar />
          <div className='w-full flex justify-between items-center'>
            <div className='w-full lg:w-1/2 max-w-[416px]'>
              <h2 className='text-sec-2 xl:text-[64px] font-bold'>Engineering</h2>
              <div className='text-prim-2 xl:text-[64px] font-bold'>
                Copilot
              </div>
              <div>
                <p>With extensive knowledge, supreme reasoning and comprehensive validation. Inframatic <span className='text-prim-1'>CoPilot</span> CoPilot can automate, innovate and accelerate your workflow.</p>
                <p className='mt-3'>Welcome to the <span className='text-prim-1'>Generative Engineering</span> era.</p>
              </div>
              <button className='bg-white-0 flex gap-4 items-center px-[22px] py-[14px] rounded-full mt-5 text-sec-1 font-medium text-base'>
                Join the Pioneer Program
                <span className='inline-block w-20 h-10 rounded-full bg-sec-1 text-center'>
                  {/* <img src="home/icons/arrow-right.png" alt="arrow" /> */}
                </span>
              </button>
            </div>
            <div className='w-full lg:w-1/2 relative transition-all duration-300 ease-in-out' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <img src="/home/hero/square.svg" alt="square" className='mx-auto translate-y-32 z-[0]' />
              <img src="/home/hero/shadow.svg" alt="shadow" className='mx-auto hero-icons border translate-y-52' />

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