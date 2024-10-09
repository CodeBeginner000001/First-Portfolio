import React from 'react'
import {motion} from "framer-motion"
const UpdownScroller = () => {
  return (
    <>
     <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
            animate = {{
              y:[0,28,0]
            }}
            transition = {{
              duration:1.5,
              repeat:Infinity,
              repeatType:"loop"
            }}
            className="h-3 w-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> 
    </>
  )
}

export default UpdownScroller
