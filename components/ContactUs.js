'use client'
import { contactUsDescription } from '@/data'
import React, { useState } from 'react'
import { toast } from "react-toastify";

const ContactUs = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromMail: email,
          name: name,
          message: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        // Handle success (e.g., show a success message)
        console.log(result.message);
      } else {
        // Handle error (e.g., show an error message)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      toast.success('Email Sent Successfully');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <div className='py-28' id='contact'>
      <div className='section-wrapper xl:!max-w-[1190px] rounded-[34px] p bg-gradient-to-r from-sec-1 to-prim-1'>
        <div className={`w-full flex justify-between items-center gap-10 px-16 pl-32 relative h-[383px]`}>
          <div className='max-w-[410px]'>
            <h2 className='text-2xl md:text-3xl text-white-0'>Join the Pioneear Program</h2>
            <p className='text-white-0 my-5'>{contactUsDescription}</p>
            <form onSubmit={handleButtonClick} className="flex flex-col gap-4 sm:gap-8">
              <div>
                {/* <h3 className="mb-2 text-base">Email *</h3> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full form-textarea py-2 px-4 rounded border border-gray-300 outline-none focus:ring focus:ring-brand-1 focus:ring-opacity-50"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className='lg:max-w-1/2 absolute bottom-0 right-10 w-[433px] h-[485px] overflow-hidden' >
            <img
              src="./home/contact-us/matic.png"
              alt="matic"
              className='object-contain translate-y-[18%] hover:translate-y-[0%] transition-transform duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs