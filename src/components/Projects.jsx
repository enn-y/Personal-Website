import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#F5F5F5]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-blue-900'>Projects</p>
                <p className='text-black py-6'>Here is a selected few of my notable projects: </p>
            </div>

            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${project1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            GPT3 Website (React JS)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/enn-y/GPT3-Website">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-900 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${project2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Car Rental Website (HTML, CSS, JS, PHP, SQL)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/enn-y/React-Apps">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-900 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${project3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Theme Park Linked List Program (C)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/enn-y/Programming-Algorithms/blob/main/DataStructuresCoursework.c">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-900 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${project4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Hospital Social Distancing Program (Java)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/enn-y/Java-Coursework">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-900 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${project5})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Python OOP Projects
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/enn-y/Python-Projects">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-900 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${project6})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Portfolio Website Prototype (HTML, CSS, JS)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/enn-y/portfolio-prototype">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-900 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Projects