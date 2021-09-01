import React from "react";
import './team.css';
import pres from "assets/img/team/manel.jpg";
import vp from "assets/img/team/chkoonbouh.jpg";
import hr from "assets/img/team/arnoub.jpg";
import pp from "assets/img/team/avertissement.jpg";
import m from "assets/img/team/chadi.jpg";
import dev from "assets/img/team/ghofrane.jpg";
import sec from "assets/img/team/sou.jpg";
import tres from "assets/img/team/menteli.jpg";


 
 
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
                     <a href="https://www.facebook.com/manelazmi/"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="https://www.linkedin.com/in/manel-azmi-a98ab7202"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
               <h2>Manel Azmi</h2>
               <h3>Présidente</h3>
            </div>
      
            <div className="col-md-3 col-sm-6 profile  text-center">
               <div className="img-box">
                 <img src ={vp} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/majd.bedoui.5"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="https://www.linkedin.com/in/majdbedoui"> <li><i class="fab fa-linkedin-in"></i></li></a>
                  </ul>
               </div>
				   <h2>Majd Bedoui</h2>
               <h3>Vice président</h3>
		      </div>

            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                 <img src ={sec} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/souhaila.bouaicha.3"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="https://www.linkedin.com/in/souheila-bouaicha-1748911b4"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
                </div>
				   <h2>Souheila Bouaicha</h2>
               <h3>Secrétaire générale</h3>
            </div>
			   
            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                 <img src ={tres} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/mattelimolka"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
				   <h2>Molka Metteli</h2>
                <h3>Trésorière</h3>
            </div>
            
         </div>

         <div className="teamrow">
            <div className="col-md-3 col-sm-6 profile  text-center">
               <div className="img-box">
                  <img src ={pp} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/amin.marzouki.27"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="https://www.linkedin.com/in/amin-marzouki"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
				   <h2>Amin Marzouki</h2>
               <h3> Responsable projet et prospection</h3>
            </div>

            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                  <img src ={m} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/chadi.bouzaine"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="https://www.linkedin.com/in/chadi-bouzaine-4448821b9"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                    </ul>
                </div>
				   <h2>Chadi Bouzaine</h2>
               <h3>Responsable marketing</h3>
            </div>

			   <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box">
                  <img src ={dev} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/gzelfani"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="https://www.linkedin.com/in/ghofrane-zelfani-03a767202"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
				   <h2>Ghofrane Zelfani</h2>
               <h3>Responsable développement commercial</h3>
            </div>

            <div className="col-md-3 col-sm-6 profile text-center">
               <div className="img-box" >
                  <img src ={hr} className="img-responsive"></img>
                  <ul>
                     <a href="https://www.facebook.com/mohamed.chiboub.566"> <li><i class="fab fa-facebook"></i></li> </a>
                     <a href="https://www.linkedin.com/in/mohamed-chiboub-b5b6a61b8"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                  </ul>
               </div>
               <h2>Mohamed Chiboub</h2>
               <h3>Responsable ressources humaines et formation</h3>  
            </div>
         
         </div>


      </div>
		</section>
	</div> 
    );
  }
