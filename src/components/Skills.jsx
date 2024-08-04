import React from "react";
import { skills } from "../data/skills.jsx";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Experienced web developer proficient in React.js, Node.js, and MongoDB. Skilled in cloud technologies (AWS) . Strong foundation in DevOps practices including Docker. Committed to continuous learning and delivering high-quality solutions.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill,index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-custom-gradient border border-black rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-black">
                {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
