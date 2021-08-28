/*eslint-disable*/
import React from "react";
//import Link from "next/link";
import './HeaderLinks.css'
import ActiveLink from './ActiveLink'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  // go to assets/jss/headerLinksStyle navLink to edit css
  const classes = useStyles();
  //to target the active Link in Next.js(like navLink is active in react)
  //first we create a component called ActiveLink with temporary attribute activeClassName
  //css selector :active to differentiate between active and inactive link.
  
  //how this works :
  //we compare the value of router.pathname with attribute href from the Link, if the value match the other 
  //then put specific className to make the link looks activated.
  <style jsx>{`
      .nav-link {
        text-decoration: none;
      }
      .active:after {
        content: ' (current page)';
      }
    `}</style>
  return (
    <List className={classes.list}>
      {/* ---------------------- HOME -------------------------------*/}
      <ListItem className={classes.listItem}>
      <Button
          color="transparent"
         
          className={classes.navLink}
        >
          <ActiveLink activeClassName="active" href="/home">
          <p className="nav-link">Acceuil</p>
          </ActiveLink>
          {/*<Link href="/"><div>Home</div></Link>*/}
        </Button>
      </ListItem>
      {/* ---------------------- STRUCTURE -------------------------------*/}
      <ListItem className={classes.listItem}>
      <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ActiveLink activeClassName="active" href="/structure">
          <p className="nav-link">À propos</p>
          </ActiveLink>
        </Button>
      </ListItem>
      {/* ---------------------- PRESTATION -------------------------------*/}
      <ListItem className={classes.listItem}>
        <Button
          
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ActiveLink activeClassName="active" href="/prestation">
          <p className="nav-link">Prestations</p>
          </ActiveLink>
        </Button>
      </ListItem>
      {/* ---------------------- BLOG -------------------------------*/}
      <ListItem className={classes.listItem}>
        <Button
         
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ActiveLink activeClassName="active" href="/blog">
          <p className="nav-link">Blog</p>
          </ActiveLink>
        </Button>
      </ListItem>
      
      {/* ---------------------- Store -------------------------------
      <ListItem className={classes.listItem}>
        <Button
         
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ActiveLink activeClassName="active" href="/store">
          <p className="nav-link">store</p>
          </ActiveLink>
          
        </Button>
      </ListItem>
*/}
      {/* ---------------------- CONTACT -------------------------------*/}
      <ListItem className={classes.listItem}>
      <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ActiveLink activeClassName="active" href="/contact">
          <p className="nav-link">Contact</p>
          </ActiveLink>

        </Button>
      </ListItem>
      
      
      
    </List>
  );
}
