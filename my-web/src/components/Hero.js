import React from 'react'
import Me from '../assets/Me.png'

const Hero = () => {
  return (
    <section className='bg-primary text-white'>
        <div className='container mx-auto grid md:grid-col-2 item-center justify-between'>
            <div className='hero-info'>
                <h1 className='text-2 text-6x1'>
                    Hi, <br/> I am <span className='text-accent'>S</span>afi <br />
                    Webdeveloper
                </h1>

                <p>
                    Proficient in React.js and Tailwind CSS as per this website
                </p>
                <button>See Projects</button>
            </div>
            <div className='hero-img'>
                <img src={Me} alt="profile" className='w-[40%] ml-auto'/>
            </div>
        </div>
        
    </section>
  )
}

export default Hero