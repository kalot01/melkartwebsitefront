import React from "react";
import './collab-withus.css';
import "./pop-up-coord.css";

export default function collabwithus() {

    const contactUS = async event => {
        // event.preventDefault()
		const { API_URL } = process.env;

        const res = await fetch(`${API_URL}/messages`, {
            body: JSON.stringify({
                firstName: event.target.first_name.value,
                lastName: event.target.last_name.value,
                email: event.target.email.value,
                subject: event.target.subject.value,
                message: event.target.message.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const data = await res.json()
    }

    return (
        <div className="container-collab">
            <div className="btn-cont text-center">
                <button type="button" className="btn-collab from-right" data-toggle="modal" data-target="#exampleModal">Collaborer avec nous</button>
            </div>


            <div className="modal fade page-wrapper p-t-80 p-b-50" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className=" wrapper wrapper--w790">
                <div className="modal-dialog modal-lg card card-5" role="document">
                    <div className="modal-content">
                        <div className="card-heading">
                            <h2 className="title">Travaillez avec nous</h2>
                        </div>
                        
                        
                    
                    
                        <div className="modal-body wrapper wrapper--w790 card-body">
                            <form onSubmit={contactUS} role="form">
                                <div className="form-row m-b-55">
                                    <div className="name">Nom complet</div>
                                        <div className="value">
                                            <div className="row row-space">
                                                <div className="col-6">
                                                    <div className="input-group-desc">
                                                        <input id="first_name"  className="input--style-5" type="text" name="first_name" placeholder="Prenom" required="required" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="input-group-desc">
                                                        <input id="lasst_name" className="input--style-5" type="text" name="last_name" placeholder="Nom" required />    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div className="form-row">
                                        <div className="name">Email</div>
                                            <div className="value">
                                                <div className="input-group">
                                                    <input id="email" className="input--style-5" type="email" name="email" placeholder="client@email.com" required />
                                                </div>
                                            </div>
                                        </div>
                                   
                                <div className="form-row">
                                    <div className="name">Objet</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input id="subject" className="input--style-5" type="text" name="subject" placeholder="Je veux travailler avec vous..." required />
                                            </div>
                                        </div>
                                    </div>
                                
                                <div className="form-row">
                                    <div className="name">Message</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <textarea name="message" id="message" cols="60" rows="5" className="input--style-5" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                
                                <button className="btn btn-lg btn-block btn--red" type="submit">Envoyer</button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>




        </div>
        
    );
}
