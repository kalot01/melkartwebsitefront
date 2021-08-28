import React from "react";
import './team.css';
import pres from "assets/img/team/pres.png";
import vp from "assets/img/team/vp.png";
import hr from "assets/img/team/hr.png";
import pp from "assets/img/team/pp.png";
import m from "assets/img/team/m.png";
import dev from "assets/img/team/dev.png";
import sec from "assets/img/team/sec.png";
import tres from "assets/img/team/tres.png";


 
 
export default function Team() {
    
    return (
    <div>
      
      <section className="team">
	   <div className="container">
		 	
         <h1>Our Team</h1>
         <div className="teamrow">
            <div className="col-md-3 col-sm-6 profile  text-center">
               <div className="img-box" >
                 <img src ={pres} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/Chedly.Zouche.1"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
               <h2>Chedly zouche</h2>
               <h3>Président</h3>
            </div>
      
            <div className="col-md-3 col-sm-6 profile  text-center">
               <div className="img-box">
                 <img src ={vp} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/feres.nefzi1"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li></a>
                  </ul>
               </div>
				   <h2>Feres Nefzi</h2>
               <h3>Vice président</h3>
		      </div>

            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                 <img src ={sec} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/Alouch1412"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
                </div>
				   <h2>Alia Chibani</h2>
               <h3>Secrétaire générale</h3>
            </div>
			   
            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                 <img src ={tres} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/amanimettichi"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
				   <h2>Amani Mittichi</h2>
                <h3>Trésorière</h3>
            </div>
            
         </div>

         <div className="teamrow">
            <div className="col-md-3 col-sm-6 profile  text-center">
               <div className="img-box">
                  <img src ={pp} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/khalil.jendoubi.58"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
				   <h2>Khalil Jendoubi</h2>
               <h3> Responsable projet et prospection</h3>
            </div>

            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                  <img src ={m} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/raaaaniaa"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                    </ul>
                </div>
				   <h2>Rania Ourari</h2>
               <h3>Responsable marketing</h3>
            </div>

			   <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                  <img src ={dev} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/eslamchihaoui"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
				   <h2>Eslem Chihaoui</h2>
               <h3>Responsable développement commercial</h3>
            </div>

            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box" >
                  <img src ={hr} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/yasmine.mgarrech"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
               <h2>Yasmine Mgarrech</h2>
               <h3>Responsable ressources humaines et formation</h3>  
            </div>
         
         </div>


      </div>
		</section>
	</div> 
    );
  }