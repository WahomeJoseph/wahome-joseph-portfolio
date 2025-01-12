/* eslint-disable no-unused-vars */
import React from 'react'
import { FaBriefcase } from 'react-icons/fa'


export default function Skills() {
  const work = [
    {position: 'Software Engineering Intern', organization: 'Power Learn Africa', duration: 'Aug 2024 - Dec 2024', description: 'During this period, I gained several skills including HTML5, CSS3. For my project I successfully developed a telemedicine application aimed at improving healthcare accessibility, utilizing MYSQL, Node JS HTML CSS.This experience honed my skills in coding, teamwork, communication, entrepreneurship and innovative problem-solving.'},
    {position: 'Software Engineering Intern', organization: 'Power Learn Africa', duration: 'Aug 2024 - Dec 2024', description: 'During this period, I gained several skills including HTML5, CSS3. For my project I successfully developed a telemedicine application aimed at improving healthcare accessibility, utilizing MYSQL, Node JS HTML CSS.This experience honed my skills in coding, teamwork, communication, entrepreneurship and innovative problem-solving.'},
    {position: 'Software Engineering Intern', organization: 'Power Learn Africa', duration: 'Aug 2024 - Dec 2024', description: 'During this period, I gained several skills including HTML5, CSS3. For my project I successfully developed a telemedicine application aimed at improving healthcare accessibility, utilizing MYSQL, Node JS HTML CSS.This experience honed my skills in coding, teamwork, communication, entrepreneurship and innovative problem-solving.'},
  ]
  return (
    <div className="container flex flex-col bg-bgcolor h-full items-center justify-center px-2">
      <h2 className="text-center text-2xl text-uscgold m-4">Skills & Experience</h2>
      <div className="relative w-full max-w-4xl">
        <div className=" absolute top-0 left-1/2 items-center transform-translate-x-1/2 w-1 border-r-2 border-uscgold rounded-sm h-full"></div>
        {work.map((work, index) => (
          <div key={work} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center w-full text-justify`}>
            <div className='w-1/2 flex justify-center'>
            <div className='bg-transparent p-4 border-2 border-uscgold rounded-md shadow-customglow w-3/4'>
            <div className='flex items-center justify-between'>
              <FaBriefcase className='text-uscgold text-xl'/>
              <span className='text-xl font-semibold text-uscgold'>{work.position}</span>
            </div>

            <div className='text-gpoppy text-center'>{work.organization}</div>
            <div className='text-gpoppy text-center'>{work.duration}</div>
            <div className='text-txtcolor text-justify'>{work.description}</div>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <h2 className='text-uscgold text-xl'>Achievements & Certifications</h2>
        <div className="flex flex-col items-center  justify-center space-y-2 p-4 rounded-md shadow-lg">
          <span>Microsoft Certified: Azure AI Fundamentals</span>
          <p>Microsoft</p>
        </div>
      </div> */}
    </div>
  );
}
