import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#F5F5F5] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/a5dae1f3-f466-4b8f-8666-7a65cca59c22' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-900 text-black'>Contact</p>
                <p className='text-black py-4'>Submit the form below or shoot me an email - luachongen@gmail.com</p>
            </div>
            <input className='bg-blue-200 p-2' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-blue-200' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-blue-200 p-2' name='message' rows='5' placeholder='Message'></textarea>
            <button className='font-bold bg-blue-900 text-white group border-2 border-blue-900 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#F5F5F5] hover:border-black hover:text-black'>Reach Me!</button>
            
        </form>
    </div>
  )
}

export default Contact