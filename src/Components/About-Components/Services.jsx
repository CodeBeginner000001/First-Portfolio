import React from 'react'
import ServiceCard from "./ServiceCard"
const Services = ({style,services,fadeIn}) => {
  return (
    <div className={style}>
      {
          services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service} fadeIn={fadeIn}/>
          ))
        }
    </div>
  )
}

export default Services
