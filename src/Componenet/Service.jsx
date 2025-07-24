import React from 'react'
import services from './data/service'

const Service = () => {

  return (
    <div className=" bg-white dark:bg-black text-black dark:text-white py-20 px-4" id="about">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">MY services</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {services.map((service) => (
            <div key={service.id} className=" bg-slate-200 dark:bg-gray-600 text-black dark:text-black p-6 pb-6 rounded-lg hover:shadow-ld  transform transition-transform duration-300 hover:scale-105">
                <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                  {service.id}  
                   </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">{service.title}</h3>
              <p className="mt-2 text-black">{service.description}</p>
              <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-400'>Read more</a>
            </div>
          ))}
        </div>
      </div>
        </div>
  )
}

export default Service