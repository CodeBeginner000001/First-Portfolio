import React from "react";
import  {Logo}  from "./subcomponents";
const Icons = ({ style,github,linkedin }) => {
  return (
    <div className={style}>
      <li>
        <Logo
          weblink="https://github.com/CodeBeginner000001/"
          source={github}
          sourcename={"github"}
          style={"h-6 opacity-50 hover:opacity-100 "}
        />
      </li>
      <li>
        <Logo
          weblink="https://www.linkedin.com/in/adarsh-goyal-20a73b246/"
          source={linkedin}
          sourcename={"linkedin"}
          style={"h-[15px] opacity-50 hover:opacity-100 bg-white ml-5"}
        />
      </li>
    </div>
  );
};

export default Icons;
