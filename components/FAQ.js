'use client'
import { faqData } from '@/data'
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { renderHighlightedText } from './libs/libs'

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className='py-16 md:py-20 xl:py-28 bg-gradient-to-br from-prim-3/50 to-prim-3'>
      <div className='px-4 max-w-[584px] mx-auto'>
        <div className='mb-12 md:mb-16'>
          <h2 className='section-title text-center text-sec-1'>{renderHighlightedText(faqData?.title)}</h2>
          <p className='text-center max-w-[400px] mx-auto mt-4'>{renderHighlightedText(faqData?.description)}</p>
        </div>
        <div className='flex flex-col gap-5'>
          {
            faqData?.faqs.map((faq, index) => (
              <div key={index} className='bg-white-0 p-5 rounded-lg'>
                <div className='flex gap-5 justify-between items-center'>
                  <h3 className='text-sec-2 font-semibold'>{renderHighlightedText(faq.question)}</h3>
                  <button onClick={() => handleToggle(index)}>
                    {expandedIndex === index ?
                      <BsPlus className='text-prim-1 text-3xl rotate-45' />
                      :
                      <BsPlus className='text-prim-1 text-3xl' />
                    }
                  </button>
                </div>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedIndex === index ? 1 : 0, height: expandedIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className='text-prim-1 mt-2'>{renderHighlightedText(faq.answer)}</p>
                </motion.div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FAQ
