import { blog } from '@/data'
import React from 'react'
import { BsArrowRight, BsClock, BsEye } from 'react-icons/bs'

import { parse, formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { renderHighlightedText } from './libs/libs';

const getTimeAgo = (dateString) => {
  const parsedDate = parse(dateString, 'dd-MM-yyyy', new Date());
  return formatDistanceToNow(parsedDate, { addSuffix: true });
};

const Blog = () => {
  return (
    <div className='py-28 bg-prim-3/40 px-2' id='blog'>
      <div className='section-wrapper-sm'>
        <div className='mx-auto max-w-[600px]'>
          <h2 className='section-title text-center text-sec-1'>{renderHighlightedText(blog?.title)}</h2>
          <p className='mt-8 text-sec-1 font-medium text-center'>{renderHighlightedText(blog?.description)}</p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center flex-wrap lg:flex-nowrap gap-5 md:gap-8'>
          {blog.blogs.map((blog) => (
            <Link
              key={blog?.id}
              className='w-full sm:w-1/2 lg:w-1/3 lg:hover:scale-105 transition-transform duration-300 ease-in-out '
              href={blog?.link} target='_blank'
            >
              <div className='bg-white rounded-lg mt-8 relative'>
                {
                  blog?.image ?
                    <img src={blog?.image} alt={blog?.title} className='w-full aspect-video object-cover rounded-lg lg:hover:shadow-md' />
                    :
                    <div className='w-full bg-black-1 rounded-lg aspect-video' />
                }
                <div className='absolute bottom-0 left-0 px-2 py-1 flex justify-between w-full bg-gradient-to-t from-black-1 to-transparent rounded-b-lg text-white-0'>
                  <div className='flex gap-2 items-center'>
                    <BsEye className='text-white-0' />
                    <p className='text-white-0'>{blog?.viewCount} views</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <BsClock className='text-white-0' />
                    <p className='text-white-0'>{blog?.publishedDate && getTimeAgo(blog?.publishedDate)} </p>
                  </div>
                </div>
              </div>
              <h3 className='text-sec-1 font-bold mt-4 text-lg md:text-xl'>{blog?.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog