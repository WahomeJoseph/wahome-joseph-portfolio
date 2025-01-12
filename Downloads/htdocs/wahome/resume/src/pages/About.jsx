/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCode } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container bg-bgcolor flex flex-col w-full h-screen p-12 space-x-4 space-y-2">
      <h2 className='text-xl font-semibold text-uscgold text-center'>About Me?</h2>

      <div className="flex flex-cols-2 w-full px-8 gap-4 items-center justify-center">
          <img src="./MAU_0026.JPG" alt="" className='w-96 h-96'/>

        <div className="flex flex-col px-10">
          {/* abt */}
          <div className="grid grid-cols-2 gap-4 p-4 m-2 w-full items-center justify-between">
            <div className="flex flex-col items-center justify-center space-x-2 p-4 m-4 shadow-lg border-b-2 border-b-uscgold rounded-b-md">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-[#cccccc]">Web Development & Design</span>
            </div>
            <div className="flex flex-col items-center justify-center space-x-2 p-4 m-4 shadow-lg border-b-2 border-b-uscgold rounded-b-md">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-[#cccccc]">Backend Development</span>
            </div>
            <div className="flex flex-col items-center justify-center space-x-2 p-4 m-4 shadow-xl border-b-2 border-b-uscgold rounded-b-md">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-txtcolor">Technical User Support</span>
            </div>
            <div className="flex flex-col items-center justify-center space-x-2 p-4 m-4 shadow-xl border-b-2 border-b-uscgold rounded-b-md">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-[#cccccc]">Technical User Support</span>
            </div>
          </div>

          <div className='items-center'>
            <p className='test-justify text-txtcolor'>
              I am a Full Stack Web Developer with a background in Computer Science and a passion for creating web applications. I have experience in building web applications using JavaScript, React, Node.js, and Express. I am a fast learner and a team player with excellent communication skills. I am excited to bring my skills to a team that values collaboration and creativity.
            </p> <br />
            <p className='test-justify text-txtcolor'>
              I am a Full Stack Web Developer with a background in Computer Science and a passion for creating web applications. I have experience in building web applications using JavaScript, React, Node.js, and Express. I am a fast learner and a team player with excellent communication skills. I am excited to bring my skills to a team that values collaboration and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
