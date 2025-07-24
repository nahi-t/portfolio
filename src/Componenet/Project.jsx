import React from 'react'
import projects  from './data/project';

const Project = () => {
  return (
    <div>
         <div className=" bg-white dark:bg-black text-black dark:text-white py-20 px-4" id="projects">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">MY Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
           {projects.map((project) => {

             return (   
               <div key={project.id} className={` bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-110
                  `}>
                 <img src={project.image} alt={project.name} className='w-full object-cover mb-4 rounded-lg' />
                 <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                 <a href={project.githubRepo} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 rounded-full'
                 target='_blank' rel='noopener noreferrer'>GitHub</a>
               </div>
             )
           })}
        </div>
       </div>
      </div>
    </div>
  )
}

export default Project