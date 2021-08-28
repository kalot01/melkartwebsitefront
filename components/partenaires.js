
import React from "react";
import "./temoignage.css";


import crafti from "../assets/img/partners/crafti.png";
import MindFitness from "../assets/img/partners/MindFitness.png";
import sheStarts from "../assets/img/partners/sheStarts.png";
import RanuCupcacke from "../assets/img/partners/RanuCupcacke.png";
import STC from "../assets/img/partners/STC.png"
import UAEC from "../assets/img/partners/UAEC.png";
import croco from "../assets/img/partners/CrocoCoder.png";
import StudyTN from "../assets/img/partners/StudyTN.png";
import LeanPartners from "../assets/img/partners/LeanPartners.png";
import LeCadeau from "../assets/img/partners/lecadeau.png";
import Vika from "../assets/img/partners/Vika.png";






export default function Temoignage() {
    
    return (
	<div className="partners-section">
		
		<div className="images-container containerlogos">
        <div className="mbr-section-head">
            <h2 className="mbr-section-title mbr-fonts-style align-center mb-0 title1">
                <strong>Nos partenaires</strong></h2>
            <h3 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 title3">Ils nous ont fait confiance</h3>
            
        </div>
        <div className="justify-content-center mt-4">
            <div className="row">
                
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner" src={UAEC} width="80%"  alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner" src={sheStarts}  width="80%"  alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner" src={MindFitness} width="80%"   alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner" src={RanuCupcacke} width="80%"   alt="Image"/>
                </div>
                           
               
            </div>
            <div className="row">
            
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner2" src={LeanPartners} width="80%" alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner1" src={STC}  width="80%"  alt="Image"/>
                </div>  
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner2" src={Vika}  width="80%"  alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner2" src={crafti}  width="80%"  alt="Image"/>
                </div>               
                </div>


            <div className="row">
            <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner2" src={LeCadeau} width="90%"    alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner2" src={StudyTN} width="90%"   alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner2" src={Vika} width="80%" height="75%"   alt="Image"/>
                </div>
                <div className="col-md-3 col-sm-3 col-6 card justify-content-center">
                    <img className="imagepartner" src={croco} width="90%"   alt="Image"/>
                </div> 
            </div>
        </div>
    </div>

	</div>
		);
  }