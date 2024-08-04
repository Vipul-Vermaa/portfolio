import React from 'react'
import {projects} from '../data/projects.jsx'

const Projects = () => {
  return (
    <>
    <section id="projects" className="text-black bg-custom-gradient body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects which I have made using Front-end,Back-end and other tech.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-custom-gradient opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    <div className="container mx-auto px-10 py-20">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Experience</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-medium text-black">Full Stack Intern</h3>
        <p className="text-gray-700">April 2024 – June 2024</p>
        <ul className="list-disc list-inside">
          <li> During my internship at Gamersback, I collaborated with a team of interns to break down project requirements into manageable tasks. I played a key role in integrating Redux with front-end frameworks, which significantly optimized state management and data flow, leading to enhanced app performance and reduced loading times. Additionally, I provided support and guidance in integrating third-party APIs and services, thereby improving the overall functionality and user experience of our applications.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-medium text-black">Web Developer Intern</h3>
        <p className="text-gray-700">October 2023 – November 2023</p>
        <ul className="list-disc list-inside">
          <li> Led a team through the entire development lifecycle, from ideation to implementation, successfully reducing the time-to-market for our projects. I also developed interactive and visually appealing user interfaces using modern frontend technologies, which enhanced the user experience and engagement.</li>
          
        </ul>
      </div>
    </div>
    </>
  )
}

export default Projects
