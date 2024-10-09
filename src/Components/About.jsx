import React from 'react'
import {motion} from 'framer-motion'
import {styles} from "../style.js"
import {services,aboutPara} from "../constants/index.js"
import {fadeIn, textVariant} from "../utils/motion.js"
import {SectionWrapper} from "../hoc/index.js"
import {Services,AboutHeading} from "./About-Components"

const About = () => {
  return (
    <>
      <AboutHeading textVariant={textVariant} styles={styles}/>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'>
        {aboutPara.about}
      </motion.p>

      <Services style={"mt-20 flex flex-wrap gap-10 justify-center items-center"} services={services} fadeIn={fadeIn}/>
    </>
  )
}

export default SectionWrapper(About,"about")
