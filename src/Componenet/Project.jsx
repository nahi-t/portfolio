import React from 'react'
import projects from './data/project'

const Project = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20 px-4" id="projects">
      <div className="max-w-screen-xl mx-auto">
        
        <h2 className="text-4xl font-bold mb-12 text-center">
          MY Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg hover:shadow-lg transition duration-300 hover:scale-105 h-full flex flex-col"
            >
              
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">
                {project.name}
              </h3>

              {/* Button pushed to bottom */}
              <div className="mt-auto">
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                >
                  GitHub
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Project