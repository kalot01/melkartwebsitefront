import React from "react";
import './workwithus.css';


export default function Workwithus() {
	const contactUS = async event => {
    // event.preventDefault()
		const { API_URL } = process.env;

    const res = await fetch(`${API_URL}/messages`, {
      body: JSON.stringify({
        firstName: event.target.fname.value,
				lastName: event.target.lname.value,
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
	<div className="container-fluid">
		<div className="row">
			<div className="col-6 parallax "></div>
			<div className="choose choose-form animate-box  col-6 formulaire container">
				<div className="ftco-heading">
					<h2 className='blanc'>start a project with us</h2>
				</div>
				<br></br><br></br>
				<form onSubmit={contactUS}>
					<div className="row form-group">
						<div className="col-md-6">
							<label className='blanc' for="fname">First Name</label>
							<input type="text" id="fname" className="form-control" placeholder="First Name" required/>
						</div>

						<div className="col-md-6">
							<label className='blanc' for="lname">Last Name</label>
							<input type="text" id="lname" className="form-control" placeholder="Last Name" required/>
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<label className='blanc' for="email">Email</label>
							<input type="text" id="email" className="form-control" placeholder="client@email.com" required/>
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<label className='blanc' for="subject">Subject</label>
							<input type="text" id="subject" className="form-control" placeholder="i want to work with you on ..." required/>
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<label className='blanc' for="message">Message</label>
							<textarea name="message" id="message" cols="30" rows="10" className="form-control" required></textarea>
						</div>
					</div>
					
					<div className="form-group">
						<input type="submit" value="Send" className="btn-submit"/>
					</div>

				</form>	
			</div>
		</div>
	</div>
	);
}

