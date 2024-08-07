import React from 'react'
import myImage from '../assets/transparent.gif'

const About = () => {


  return (
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
        Hi, I'm Vipul.
        <br className="hidden lg:inline-block" />I love to build amazing
        apps.
      </h1>
      <p className="mb-8 leading-relaxed">
        
Hi there! I'm a passionate and dedicated web developer developing web applications. I specialize in both front-end and backend development. I'm constantly exploring new technologies and methodologies to improve my skills and deliver high-quality solutions.
      </p>
      <p className='text-black' >
       <b> Email: vipulvermalm8@gmail.com</b>
      </p>
      <div className="flex justify-center">
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={myImage}
      />
    </div>
  </div>
  
  )
}

export default About
