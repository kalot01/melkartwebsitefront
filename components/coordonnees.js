import React from "react";
import './coordonnees.css';

 export default function Coord() {

	const contactUS = async event => {
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


	 return(
		<div className="page-wrapper p-t-45 p-b-50">
        <div className="coordonnees-left ">
            <div class="coordonnees-left-wrapper">
				<div class="size1">
					<div class="txt1 p-r-25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
					</div>

					<div class="size2">
						<span class="txt1 p-b-20">
							Addresse
						</span>

						<span class="txt2">
                        45 Rue des Entrepreneurs 2035 Charguia II Tunis- Carthage-Tunisie
						</span><br /><br />
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="494" height="328" id="gmap_canvas" src="https://maps.google.com/maps?q=45%20Rue%20des%20Entrepreneurs%202035%20Charguia%20II%20Tunis-%20Carthage-Tunisie&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br /><style>.mapouter{`position:relative;text-align:right;height:328px;width:494px;`}</style><style>.gmap_canvas {`overflow:hidden;background:none!important;height:328px;width:494px;`}</style></div></div>
					</div>
				</div>

				<div class="size1">
					<div class="txt1 p-r-25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
					</div>

					<div class="size2">
						<span class="txt1 p-b-20">
							Lets Talk
						</span>

						<span class="txt3">
                            (+216)94332117<br></br> - MANEL AZMI (Présidente)<br></br><br></br>
                            (+216)53616261<br></br> - GHOFRANE ZELFENI (Responsable développement commercial)
						</span>
					</div>
				</div>

				<div class="size1">
					<div class="txt1 p-r-25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
					</div>

					<div class="size2">
						<span class="txt1 p-b-20">
                        Support général
						</span>

						<span class="txt3">
							contact@melkartje.com<br></br>devco.melkart.je@gmail.com
						</span>
					</div>
				</div>
			</div>
        </div>
        <div className="coordonnees-right">
            <div className="card card-5">          
                <div className="card-body">
                 
                    {/***** CONTACT FORM ****/}
                    <div className="row p-t-10">
                        <h2 className='contact-form m-b-35'>N'hésitez pas à nous contacter</h2>
                    </div>
                    <form onSubmit={contactUS}>
                        <div className="form-row m-b-55">
                            <div className="name">Nom complet</div>
                            <div className="value">
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group-desc">
                                            <input id="first_name"  className="input--style-5" type="text" name="first_name" placeholder="Nom" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group-desc">
                                            <input id="lasst_name" className="input--style-5" type="text" name="last_name" placeholder="Prénom" required />    
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
                                    <input id="subject" className="input--style-5" type="text" name="subject" placeholder="Je veux travailler avec vous..."  required />
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

                        <div>
                            <button className="btn btn--radius-2 btn--red" type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );

	
 }
