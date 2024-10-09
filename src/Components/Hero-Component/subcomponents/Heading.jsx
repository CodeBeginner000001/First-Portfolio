import React from "react";

const Heading = ({styles}) => {
  return (
    <>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#915eff]">Adarsh</span>
      </h1>
    </>
  );
};

export default Heading;
