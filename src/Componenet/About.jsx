import React from 'react'
import aboutImage from '../assets/about.jpg'

const About = () => {
  return (
    <div className="  bg-white dark:bg-black text-black dark:text-white py-20 px-4" id="about">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img 
              src={aboutImage} 
              alt="About Me" 
              className="w-64 md:w-80 h-auto rounded-lg object-cover shadow-lg transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Text Section */}
          <div className="text-lg leading-relaxed max-w-2xl">
            <p>
              I am a passionate full stack developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end development, allowing me to build comprehensive solutions that deliver exceptional user experiences.
            </p>
            <br />
            <p>
              I am proficient in a variety of programming languages and frameworks, including React, Node.js, and PostgreSQL. I thrive on challenges and am always eager to learn new technologies to enhance my skills.
            </p>
            {/* <br /> */}
            <p>
              I believe in the power of collaboration and enjoy working in teams to bring innovative ideas to life. My goal is to contribute to projects that make a positive impact and to continuously grow as a developer.
            </p><br />
            <div className='space-y-4'>  
             <div className='flex items-center'>
              <label htmlFor="htmlandcss" className='w-2/12'>Html & css</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                transform transition-transform duration-300 hover:scale-105 w-10/12'>

                </div>
              </div>

             </div>
<div className='flex items-center'>
              <label htmlFor="htmlandcss" className='w-2/12'>React js</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                transform transition-transform duration-300 hover:scale-105 w-10/12'>

                </div>
              </div>

             </div>

 
             <div className='flex items-center'>
              <label htmlFor="htmlandcss" className='w-2/12'>nodjs</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                transform transition-transform duration-300 hover:scale-105 w-10/12'>

                </div>
              </div>

             </div>
            </div>
            {/* client */}
            <div className='mt-12 flex justify-between text-center '>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500
                ransform transition-transform duration-300 hover:scale-105'>
                  3+</h3>
                  <p className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-500 
                  ransform transition-transform duration-300 hover:scale-105'> years expriance</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500
                transform transition-transform duration-3000 hover:scale-105'>
                  30+</h3>
                  <p className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-500 
                  transform transition-transform duration-300 hover:scale-105'> projects</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-105'>
                  30+</h3>
                  <p className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-500 
                  transform transition-transform duration-300 hover:scale-105'> Happy client</p>
              </div>
              
              


            </div>

            </div>


            </div>
          
           
             
        
         
    
          </div>
        </div>
    
   
  )
}

export default About
