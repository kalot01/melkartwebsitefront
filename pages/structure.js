import React from "react";
import Aboutus from "../components/about-us";
import Aboutje from "../components/about-us-JEconcept";
import StickySM from "../components/stickySM";
import Team from "../components/team";
import Infoecole from "../components/info-ecole";
import Collaborate from "../components/work-with-us2";


export default function Components(props) {
    
    return (
      <div>
        <StickySM />
        <br></br><br></br>
        <Aboutje />
     
        <Aboutus />
        
        <Infoecole />
        <br></br>
        <Team />
        <br></br>
        <Collaborate />
      </div>
    );
  }