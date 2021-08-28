import React from "react";
import Blue from "../assets/img/Blue.png";
import "./aboutus.css"

export default function About() {

  return (
    <div className="site-section">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-7">
            <h3>Qui Sommes Nous?</h3>
            <h2>La MELKART Junior Enterprise Enicarthage</h2>
            <p>La MELKART Junior Entreprise a été créée en 2012. C’est une organisation
            estudiantine localisée à l’ENICarthage (Ecole Nationale d’Ingénieurs de
            Carthage) à travers laquelle les étudiants font leurs premiers pas vers la vie
            professionnelle. Son objectif est le développement de l’esprit
            entrepreneurial, le leadership, la communication, le lancement et la gestion
            de projet. Par l’amélioration des compétences des membres à travers des
            formations proposées par les différentes branches d’études, ils pourront
            répondre par la suite à la demande des clients et leur fournir des services.
				 </p>
          </div>
         
          <div className="col-md-5">
            <img src={Blue} width="450" height="450" alt="Image" className="img-responsive img-rounded justify-content-center"></img>
          </div>
          

        </div>
      </div>
    </div>
  );
}