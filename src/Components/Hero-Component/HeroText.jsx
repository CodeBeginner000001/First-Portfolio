import React from "react";
import {Heading,Paragraph} from "./subcomponents"
const HeroText = ({styles}) => {
  return (
    <div>
      <Heading styles={styles}/>
      <Paragraph/>
    </div>
  );
};

export default HeroText;
