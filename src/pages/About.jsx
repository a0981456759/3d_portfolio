import React from 'react'
import {skills, experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'm 
        <span className='blue-gradient_text font-semibold drop-shadow'> Howard</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I am a Master's student in Information Technology at the University of Melbourne, passionate about developing innovative solutions across various technology domains.
        </p>
        <ul className='my-5 list-disc ml-5 space-y-2'>
          <li className='text-slate-500 text-sm font-normal pl-1'>
            Full-stack development with Node.js
          </li>
          <li className='text-slate-500 text-sm font-normal pl-1'>
            Mobile app development (Android)
          </li>
          <li className='text-slate-500 text-sm font-normal pl-1'>
            Data visualization using R and Tableau
          </li>
          <li className='text-slate-500 text-sm font-normal pl-1'>
            Blockchain development with Solidity
          </li>
          <li className='text-slate-500 text-sm font-normal pl-1'>
            Data analysis and machine learning
          </li>
        </ul>
        <p>
        Through my academic and professional journey, I've developed a strong foundation in both theoretical concepts and practical implementation, with a particular focus on building efficient, user-centric solutions.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-x1 flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
                </div>
              </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>My Experience</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Prior to my graduate studies, I worked as a Backend Engineer and Blockchain Researcher in Taiwan, where I gained hands-on experience in developing scalable applications and exploring emerging technologies.
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>}
              iconStyle={{
                background: experience.iconBg,
              }}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-slate-500 font-base font-medium' style={{margin: 0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-slate-500 text-sm font-normal pl-1'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About