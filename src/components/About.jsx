import React from 'react'
import { CircleGrid } from "react-awesome-shapes";
import { Circle } from "react-awesome-shapes";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F5F5F5] text-black'>
        <div className='shape-container absolute top-100 left-80'>
            <CircleGrid
            position="relative"
            color="#00008B"
            size="175px"
            zIndex={2}
            />
        </div>
        <div className='shape-container absolute right-40'>
            <Circle
                color="linear-gradient(135deg, #a5b4fc, #6366f1)"
                size={['150px', '150px', '180px', '180px']}
                zIndex={2}
            />
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-900'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi! I'm Chong En, Please take a look around.</p>
                </div>
                <div>
                    <p>Throughout my academic journey, I have been deeply committed to acquiring 
                        a well-rounded understanding of computer science and its multitude of applications. 
                        I have a strong passion for enhancing digital experiences through 
                        innovative technology solutions.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About