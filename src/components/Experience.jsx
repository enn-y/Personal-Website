import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import c from '../assets/c.png';
import java from '../assets/java.png';

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#F5F5F5] text-black'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-blue-900'>Experience</p>
            <p className='py-4'>These are the technologies I've worked with: </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='hover:scale-110 duration-500 text-blue-900 font-extrabold'>
                <img className='w-20 mx-auto' src={html} alt='html icon' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='hover:scale-110 duration-500 text-blue-900 font-extrabold'>
                <img className='w-20 mx-auto' src={css} alt='css icon' />
                <p className='my-4'>CSS</p>
            </div>
            <div className='hover:scale-110 duration-500 text-blue-900 font-extrabold'>
                <img className='w-20 mx-auto' src={javascript} alt='javascript icon' />
                <p className='my-4'>Javascript</p>
            </div>
            <div className='hover:scale-110 duration-500 text-blue-900 font-extrabold'>
                <img className='w-20 mx-auto' src={react} alt='react icon' />
                <p className='my-4'>React</p>
            </div>
            <div className='hover:scale-110 duration-500 text-blue-900 font-extrabold'>
                <img className='w-20 mx-auto' src={c} alt='c icon' />
                <p className='my-4'>C</p>
            </div>
            <div className='hover:scale-110 duration-500 text-blue-900 font-extrabold'>
                <img className='w-20 mx-auto' src={java} alt='java icon' />
                <p className='my-4'>Java</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience