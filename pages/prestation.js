import React from "react";

import Services from "../components/nos-services";
import Collaborate from "../components/work-with-us2";
import Why from "../components/why-us";
import StickySM from "../components/StickySM";

export default function Components(props) {
    
    return (
      <div>
        <StickySM />
        
        <Services />
        <Why />
      
        <Collaborate />
      
    </div>
    );
  }
