import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-between ml-[5rem]'>
        <div>
            <h1 className='font-bold text-[4.2rem]'>Putuk Truno Camp Area</h1>
            <p>
                We want to be on each of your journeys seeking 
                the satisfaction of seeing the incorruptible 
                beauty of nature. We can help you on an adventure 
                around the world in just one app
            </p>
        </div>
        <Image src="/hero.png" alt='hero-image' width={800} height={100} className='mt-[-6rem] mr-[-7rem]' />
    </div>
  )
}

export default Hero