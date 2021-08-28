import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './partenaires.css';

 
 
import image4 from "../assets/img/janet.jpg";
 
import image1 from "../assets/img/mehdi.jpg";
 
import image5 from "../assets/img/nasr.jpg"
 


import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function Partners() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };


  return(
    <section className="temoignages">
        <div className="container">
            <h2 className="title1 text-center">témoignages</h2>
            <div className="accordion d-flex justify-content-center align-items-center height" id="accordionExample">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pt-0">
                            <ul className="testimonial-list">
                                <li>
                                    <div className="card p-3" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className="d-flex flex-row align-items-center"> <img src={image1} width="50" className="rounded-circle" />
                                            <div className="d-flex flex-column ml-5"> <span className="font-weight-normal text-dark">Milton Austin</span> <span className="text-dark">Sales Manager, Stack</span> </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card p-3" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="d-flex flex-row align-items-center"> <img src={image4} width="50" className="rounded-circle"/>
                                            <div className="d-flex flex-column ml-5"><span className="font-weight-normal text-dark">Janet</span> <span className="text-dark">Presidente 2018/2019</span> </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card p-3" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div className="d-flex flex-row align-items-center"> <img src={image5} width="50" className="rounded-circle"/>
                                            <div className="d-flex flex-column ml-5"> <span className="font-weight-normal text-dark">Luke Harper</span><span className="text-dark">Sales Team Lead,Sketch</span> </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 testimonials-margin">
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h2 className="text-dark">It was a great experience</h2><br/>
                                    <p className="tem">"The journey within our MELKART Junior Enterprise is the purposeful kind of journey. It is an enthusiastic learning process towards unlocking full potential and civic engagement. It will be the experience that sets the bar high for your next endeavors within civil society."</p>
                                </div>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h2 className="text-dark">It was a great experience</h2>
                                    <br/>
                                    <p className="tem">"The journey within our MELKART Junior Enterprise is the purposeful kind of journey. It is an enthusiastic learning process towards unlocking full potential and civic engagement. It will be the experience that sets the bar high for your next endeavors within civil society."</p>
                                </div>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h2 className="text-dark">You all are awesome thanks alot</h2><br/>
                                    <p className="tem">"The journey within our MELKART Junior Enterprise is the purposeful kind of journey. It is an enthusiastic learning process towards unlocking full potential and civic engagement. It will be the experience that sets the bar high for your next endeavors within civil society."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </section>
  );
}
