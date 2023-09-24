import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import { CircleGrid } from "react-awesome-shapes";
import { Donut } from "react-awesome-shapes";
import { Diamond } from "react-awesome-shapes";

const Home = () => {
  return (
    <div name='home' className='bg-[#F5F5F5] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <div className='shape-container absolute bottom-3 right-8'>
          <CircleGrid
            position="relative"
            color="#00008B"
            size="175px"
            zIndex={2}
          />
        </div>
        <div className='shape-container absolute top-60 right-80'>
          <Donut
            color="#00008B"
            size="180px"
            width={['40px', '40px', '60px', '60px']}
            zIndex={2}
          />
        </div>
        <div className='shape-container absolute bottom-10 left-60'>
          <Diamond
            color="linear-gradient(135deg, #93c5fd, #3b82f6)"
            size="100px"
            zIndex={2}
          />
        </div>
        {/* Container */}
            <p className='text-2xl text-blue-900 font-bold'>Hello! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#00000]'>Chong En</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#00000]'><span className='text-blue-900'>Penultimate</span> Computer Science Undergraduate</h2>
            <p className='text-blue-900 py-4 max-w-[770px] font-bold'>I am a prospective full-stack developer with a concentration on enriching 
                digital interactions. At present, I have transitioned my focus towards 
                constructing responsive full-stack applications. 
            </p>
            <div>
                <button className='font-bold bg-blue-900 text-white group border-2 border-blue-900 px-6 py-3 my-2 flex items-center hover:bg-[#F5F5F5] hover:border-black hover:text-black'><Link to="projects" smooth={true} duration={500} >View Projects</Link> 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home