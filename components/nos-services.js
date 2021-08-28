import React from "react";
import "./services.css"



export default function Services() {
  // #2F5B96
  return (
    <section className="services">
      <div className="container">
        <div>
          <h2 className="title1 text-center">NOS SERVICES</h2>
          <p className="text-center desc">Notre domaine est l'IT , on vous propose différents services afin de vous démarquer de vos concurrents et gagner la confiance de vos clients.</p>
        </div>

        <div className="row">
          <div className="col-md-4 icon-box">
            <div className="icon"><i className="fas fa-mobile-alt"></i></div>
            <h4 className="title"><a>Développement d'applications Mobiles</a></h4>
            <p className="description">On vous conçoit des applications mobiles qui fidélisent vos clients et optimisent l'expérience-client.</p>
          </div>
          <div className="col-md-4 icon-box">
            <div className="icon"><i className="fas fa-desktop"></i></div>
            <h4 className="title"><a>Développement d'applications Desktop</a></h4>
            <p className="description">On développe pour vous des applications Desktop afin de faciliter l'accès à vos clients et assurer la sécurité .
  </p>
          </div>
          <div className="col-md-4 icon-box">
            <div className="icon"><i className="fas fa-globe"></i></div>
            <h4 className="title"><a>Développement de sites<br></br> web</a></h4>
            <p className="description">On vous propose des sites web vitrine ou dynamiques selon vos besoins avec des designs créatifs afin d'attirer l'attention de votre cible.</p>
          </div>
                
          
        </div>

      </div>
    </section>
  );
}