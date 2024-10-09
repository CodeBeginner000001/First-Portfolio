import React from "react";

const Logos = ({ source, sourcename, style,weblink}) => {
  return (
    <>
      <a href={weblink} target="_blank">
        <img
          src={source}
          alt={sourcename}
          className={style}
        />
      </a>
    </>
  );
};

export default Logos;
