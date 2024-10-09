import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin } from "../assets";

const Navbar = () => {
  let [active, setActive] = useState("");
  let [toggle, setToggle] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer flex">
            Adarsh &nbsp;
            <span className="md:block hidden">| CodeBeginner000001</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          <div className="flex justify-between items-center -mr-3 ">
            <li>
              <a href="https://github.com/CodeBeginner000001/" target="_blank">
                <img
                  src={github}
                  alt="github"
                  className="h-6 opacity-50 hover:opacity-100 "
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adarsh-goyal-20a73b246/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="github"
                  className="h-[15px] opacity-50 hover:opacity-100 bg-white ml-3"
                />
              </a>
            </li>
          </div>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className={`${
              toggle == true ? "h-[28px] w-[28px]" : "h-[15px] w-[15px]"
            } object-contain cursor-pointer z-10`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-10 black-gradient absolute top-20 right-0 my-1 min-w-[150px] z-5 rounded-xl `}
          >
            <ul className="list-none flex flex-col justify-center items-center gap-8">
              
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins hover:text-white text-[16px] cursor-pointer font-normal `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <div className="flex justify-between items-center -mr-3 ">
                <li>
                  <a
                    href="https://github.com/CodeBeginner000001/"
                    target="_blank"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="h-6 opacity-50 hover:opacity-100 "
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adarsh-goyal-20a73b246/"
                    target="_blank"
                  >
                    <img
                      src={linkedin}
                      alt="github"
                      className="h-[15px] opacity-50 hover:opacity-100 bg-white ml-5"
                    />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
