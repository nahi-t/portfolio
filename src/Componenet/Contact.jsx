import React from 'react'
import {FaEnvelope,FaPhone,FaMapMarkerAlt} from 'react-icons/fa'

const Contact = () => {
  return (
   <div className=" bg-white dark:bg-black text-black dark:text-white py-20 px-4" id="contact">
         <div className="max-w-screen-xl mx-auto">
           <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>

           <div className="flex flex-col md:flex-row items-center md:space-x-12">
           
            <div className="flex-1">
              <h3 className='text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> let`s Talk</h3>
              <p> I`am open to discussing web development projects or partnership opportunities</p>
              <div className='mb-4 mt-8'> 
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:nahomeketema553@gmail.com" className='hover:underline'>nahomeketema553@gmail.com</a>

              </div>
              <div className='mb-4 '> 
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
               <span>+251929720816</span>
              </div>
              <div className='mb-4 '> 
                <FaMapMarkerAlt className='inline-block text-green-400 mr-2'></FaMapMarkerAlt>
               <span>Ethiopia Harari</span>
              </div>
                   </div>
                 <div className='flex-1 w-full'>
                    <form action="" className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block mb-2'>your name</label>
                            <input type="text" 
                            className='w-full p-2 rounded bg-white dark:bg-gray-600 text-black dark:text-white border border-gray-600
                            focus:outline-none focus:border-orange-400  hover:border-green-400' placeholder='enter your name'/>
                        </div>
                        <div>
                            <label htmlFor="name" className='block mb-2'>your Email</label>
                            <input type="text" 
                            className='w-full p-2 rounded bg-white dark:bg-gray-600 text-black dark:text-whiteborder border border-gray-600
                            focus:outline-none focus:border-orange-400  hover:border-green-400'placeholder='enter your Email'/>
                        </div>
                         <div>
                            <label htmlFor="message" className='block mb-2'> message </label>
                            <textarea type="text" 
                            rows="5"
                            className='w-full p-2 rounded bg-white dark:bg-gray-600 text-black dark:text-white border border-gray-600
                            focus:outline-none focus:border-orange-400 hover:border-green-400'placeholder='enter your message'/>
                        </div>
                               <button className=' bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-[30px]  px-8 py-2 rounded-full hover:scale-105 transform transition duration-300 '>
                                send</button>
                    </form>

                 </div>
                 </div>
   
                </div>
              </div>
             
              
                
           
            
       
           
  )
}

export default Contact