import React from 'react'
import nahi from '../assets/nahi.jpg'

const Hero = () => {
  return (
    <div className='bg-white dark:bg-black text-black dark:text-white text-center p-16'>
      <img
        src={nahi}
        alt="nahom"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform hover:scale-110 duration-300'
      />
      <h1 className='text-4xl font-bold mb-4'>
        I am{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
          Nahom Ketema
        </span>{" "}
        — Full Stack Developer
      </h1>
      <p className='mt-4 text-lg bg-white dark:bg-black text-black dark:text-gray-400 max-w-3xl mx-auto'>
        I’m a passionate Full Stack Developer specializing in building dynamic, scalable, and responsive web applications. With strong skills in React, Node.js, and PostgreSQL, I create seamless user experiences backed by solid backend logic. I’m always eager to solve problems and explore new technologies to keep growing as a developer.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='md:inline bg-gradient-to-r from-green-500 to-purple-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition duration-300'>
          Contact with Me
        </button>
        <button className='hidden md:inline bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition duration-300' id='contact'>
          Resume
        </button>
      </div>
    </div>
  )
}

export default Hero
