import React from 'react'
import { Link } from "react-router-dom";
import { Logo } from './subcomponents';
const PortfolioName = ({setActive,logo}) => {
  return (
    <>
       <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Logo source={logo} sourcename={"logo"} style={"w-10 object-contain"}/>
          <p className="text-white text-[16px] font-bold cursor-pointer flex">
            Adarsh &nbsp;
            <span className="md:block hidden">| CodeBeginner000001</span>
          </p>
        </Link>
    </>
  )
}

export default PortfolioName
