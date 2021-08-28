import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import white from "../../assets/img/White.png" ;

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);


export default function Navbar(props) {
    const { ...rest } = props;
    return (
      <div>
        
        <Header
        brand="Melkart"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      </div>
    );
  }