import React from 'react'
import {BallCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import {technologies} from "../constants"
const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center flex-row gap-10 gap-y-20'>
      {
        technologies.map((technology)=>(
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
            <p className='ml-6'>{technology.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech,"")
