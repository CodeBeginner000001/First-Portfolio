import React, { act, useState } from "react";


import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin } from "../assets";

import { Icons,Navlist,PortfolioName } from "./Navbar-Components";

const Navbar = () => {
  let [active, setActive] = useState("");
  let [toggle, setToggle] = useState(true);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
       <PortfolioName setActive={setActive} logo={logo}/>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          <Icons style={"flex justify-between items-center -mr-3 "} github={github} linkedin={linkedin}/>
          <Navlist navLinks={navLinks} active={active}/>
        </ul>

{/* mobile view */}

        <div className="sm:hidden flex justify-end items-center">
          <img src={toggle ? menu : close} alt="menu" 
          className={`${toggle == true ? "h-[28px] w-[28px]" : "h-[15px] w-[15px]"} object-contain cursor-pointer z-10`}
          onClick={() => setToggle(!toggle)}/>
          <div className={`${toggle ? "hidden" : "flex"} p-10 black-gradient absolute top-20 right-0 my-1 min-w-[150px] z-5 rounded-xl `}>
            <ul className="list-none flex flex-col justify-center items-center gap-8">
                <Navlist navLinks={navLinks} active={active}/>
                <Icons style={"flex justify-between items-center -mr-3 "} github={github} linkedin={linkedin}/>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
