import React from 'react'
import {styles} from "../style"
import { UpdownScroller,DotLine,HeroText,ComputersCanvas } from './Hero-Component'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} px-16 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <DotLine/>
        <HeroText styles={styles}/>
      </div>
      <ComputersCanvas/>
      <UpdownScroller/>
    </section>
  )
}

export default Hero
