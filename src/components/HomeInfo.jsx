import React from 'react'
import {arrow} from '../assets/icons'
import {Link} from 'react-router-dom'

const InfoBox = ({text, link, btnText}) => {
    return (
    <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">{btnText} 
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
    )
}

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx5">Hi, I am 
        <span className="font-semibold"> Howard Wang</span>
        <br/>
        A Software Engineer from Australia
        </h1>
    ),
    2:(
        <InfoBox 
            text="Worked with many companies and picked up many skills along the way."
            link="/about"
            btnText="Learn More"
        />
    ),
    3:(
        <InfoBox
        text="Led multiple projects from start to finish, from concept to delivery."
        link="/projects"
        btnText="View Projects"
        />
    ),
    4:(
        <InfoBox
        text="Need a developer? Reach out to me via email or LinkedIn."
        link="/contact"
        btnText="Contact Me"
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo