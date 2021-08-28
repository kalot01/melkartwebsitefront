import React from "react";
import './statistique.css'
//import './script.js'
import img1 from "../assets/img/junEntrep.png"
import img2 from "../assets/img/exp.png"
import img3 from "../assets/img/arg.png"
import CountUp from 'react-countup';

export default function Stats() {

  return (
    <div>
      <div id="ftco-counter" className="ftco-counters " data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <br></br>
          <br></br>

          <div className="row">
            <div className="col-md-4 text-center animate-box">
              <div >  <img className="Icon" src={img1}></img> </div>
              <br></br>

              <span className="ftco-counter js-counter" data-from="0" data-to="70" data-speed="5000" data-refresh-interval="50"></span>
              <span className="ftco-counter-label">+<CountUp end={70}   duration={5.75}/>           <br></br>
                    <h3>JUNIOR ENTREPRENEURS</h3></span>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div >  <img className="Icon" src={img2}></img> </div>
              <br></br>

              <span className="ftco-counter js-counter" data-from="0" data-to="9" data-speed="5000" data-refresh-interval="50"></span>

              <span className="ftco-counter-label">+<CountUp end={9}   duration={5}/>            <br></br>
                   <h3>ANS D'EXPERIENCE</h3></span>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div >  <img className="Icon" src={img3}></img> </div>
              <br></br>

              <span className="ftco-counter js-counter" data-from="0" data-to="15" data-speed="5000" data-refresh-interval="50"></span>

              <span className="ftco-counter-label"> <CountUp end={15}   duration={9}/>K<br></br>
                 <h3>CHIFFRE D'AFFAIRES</h3></span>
            </div>

          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}
