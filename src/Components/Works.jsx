import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion"
import {styles} from "../style";
import {github,linklogo} from "../assets";
import {SectionWrapper} from "../hoc"
import {projects} from "../constants"
import {fadeIn,textVariant } from '../utils/motion';

const ProjectCard = ({index,name,description,tags,image,source_code_link,link})=>{
  return (
    <motion.div
    variants={fadeIn("up","spring",index*0.5,0.75)}
    >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex flex-col justify-start m-3 card-img_hover items-end'>
            <div onClick={()=> window.open(source_code_link,"_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mb-2'
            >
              <img src={github} alt="github" className='object-contain h-6 w-6 ' />
            </div>
            <div onClick={()=> window.open(link,"_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={linklogo} alt="link_logo" className='object-cover h-11 ' />
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-white font-bold text-[24px] mt-3'>{name}</h3>
          <p className='text-[14px] mt-2 text-secondary'>{description.length>200?description.slice(0,240)+" ...":description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {
            tags.map((tag)=>(
              <p className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly
        described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work
        with different technologies, and manage projects effectively.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"work")
