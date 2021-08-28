import React from "react";

import logo from "../assets/img/Logo_ENICarthage.jpg"

export default function Enicar() {
    
    return (
      <div className="site-sectionenicar" /*style={{background : "linear-gradient(#f9f9f9, #fff)"}}*/>
			<div className="container">
				<div className="row">
					<div className="col-md-5 pl-4">
						<img src={logo} width="420" height="250" alt="Image" className="img-responsive img-rounded"></img>
					</div>
					
					<div className="col-md-7">
						<h2>L'École Nationale d'Ingénieurs de Carthage (ENICarthage)</h2>
						<p>Crée en 2002, l’ENICarthage offre plusieurs formations spécialisées par un diplôme de Mastère ou d’Ingénieur. Formation d’Ingénieurs: Génie Mécatronique, Génie Informatique, Génie Infotronique et Génie Industriel.
					 </p>
					</div>
				</div>
			</div>
		</div>
    );
  }