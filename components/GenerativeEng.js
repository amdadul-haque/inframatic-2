import React from 'react'

const GenerativeEng = () => {

  const cards = [
    {
      id: 1,
      icon: "1.png",
      frontText: `Advanced </br> Engineering Assistant`,
      backText: "back text",
    },
    {
      id: 2,
      icon: "2.png",
      frontText: "Transparency",
      backText: "back text",
    },
    {
      id: 3,
      icon: "3.png",
      frontText: "Native Machine Readability",
      backText: "back text",
    },
    {
      id: 4,
      icon: "4.png",
      frontText: "Advanced Calculations",
      backText: "back text",
    },
    {
      id: 5,
      icon: "5.png",
      frontText: "Enhanced Technical Reporting",
      backText: "back text",
    },
    {
      id: 6,
      icon: "6.png",
      frontText: "Engineering Drawing Interpretation",
      backText: "back text",
    },
    {
      id: 7,
      icon: "7.png",
      frontText: "Regulated Industries",
      backText: "back text",
    },
    {
      id: 8,
      icon: "8.png",
      frontText: "High-Quality Knowledge",
      backText: "back text",
    },
    {
      id: 9,
      icon: "9.png",
      frontText: "Scalable Data Integration",
      backText: "back text",
    },
  ]

  return (
    <>
      <div className='py-28 bg-prim-3 bg-opacity-50'>
        <div className='section-wrapper 2xl:!max-w-[1140px]'>
          {/* <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
              cards.map((card, index) => (
                <div key={index} className='relative w-full h-[500px] flex items-center bg-white-0 rounded-[30px]'>
                  <div className='p-8 w-full h-full flex flex-col justify-center items-center'>
                      <span className='inline-block p-5 h-24 w-24 bg-white-0 shadow rounded-[30px] border'>
                        <img src={`/home/generative/${card.icon}`} alt={""} className='max-h-full mx-auto' />
                      </span>
                    <h3 className='text-sec-2 font-bold text-center text-xl mt-4'>{card.frontText}</h3>
                    <p className='text-black-2 text-center mt-4'>{card.backText}</p>
                  </div>
                </div>
              ))
            }
          </div> */}
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5'>
            {cards.map((card, index) => (
              <div key={index} className='relative w-full h-[500px]  flip-card'>
                <div className='flip-card-inner '>
                  <div className='flip-card-front h-full bg-white-0 rounded-[30px] border flex flex-col justify-center  items-center'>
                    <span className='inline-block p-5 h-24 w-24 bg-white-0 shadow rounded-[30px] border'>
                      <img src={`/home/generative/${card.icon}`} alt={""} className='max-h-full mx-auto' />
                    </span>
                    <h3>{card.frontText}</h3>
                  </div>
                  <div className='flip-card-back w-full inline-block p-5 h-24 bg-white-0 shadow rounded-[30px] border'>
                    <p>{card.backText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GenerativeEng