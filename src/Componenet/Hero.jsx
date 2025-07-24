import React from 'react'
import nahi from '../assets/nahi.jpg'
const Hero = () => {
  return (
    <div className=' bg-white dark:bg-black text-black dark:text-white text-center p-16'>
        <img src={nahi} alt="nahom" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform hover:scale-110 duration-300' />
        <h1 className='text-4xl font-bold mb-4'>
            i am {""} 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>Nahom ketema </span>
            I am a full stack Developer
        </h1>
        <p className='mt-4 text-lg  bg-white dark:bg-black text-black dark:text-gray-400'>
            I am a passionate full stack developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end development, allowing me to build comprehensive solutions that deliver exceptional user experiences.
            I am proficient in a variety of programming languages and frameworks, including React, Node.js, and PostgreSQL. I thrive on challenges and am always eager to learn new technologies to enhance my skills.
        </p>
        <div className='mt-8 space-x-4'>
            <button className='md:inline bg-gradient-to-r from-green-500 to-purple-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition duration-300'>Contact with Me</button>
            <button className='hidden md:inline   bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition duration-300'>Resume</button>
        </div>
    </div>
  )
}

export default Hero