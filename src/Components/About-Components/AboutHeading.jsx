import React from 'react'
import {motion} from 'framer-motion'
const AboutHeading = ({textVariant,styles}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
    </>
  )
}

export default AboutHeading
