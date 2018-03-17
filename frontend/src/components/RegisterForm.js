import React, { Component } from 'react';

class RegisterForm extends Component {
  render() {
    return (
	   <div>
		<main>
		<div className="bg_color_2">
			<div className="container margin_60_35">
				<div id="register">
					<h1>Please Register to Virtual Learning Centre!</h1>
					<div className="row justify-content-center">
						<div className="col-md-5">
								<div className="box_form">
									<div className="form-group">
										<label>Name</label>
										<input type="text" className="form-control" placeholder="Your name"/>
									</div>
									<div className="form-group">
										<label>Last name</label>
										<input type="text" className="form-control" placeholder="Your last name"/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input type="email" className="form-control" placeholder="Your email address"/>
									</div>
									<div className="form-group">
										<label>Password</label>
										<input type="password" className="form-control" id="password1" placeholder="Your password"/>
									</div>
									<div className="form-group">
										<label>Confirm password</label>
										<input type="password" className="form-control" id="password2" placeholder="Confirm password"/>
									</div>
									<div id="pass-info" className="clearfix"></div>
									<div className="checkbox-holder text-left">
										<div className="checkbox_2">
											<input type="checkbox" value="accept_2" id="check_2" name="check_2" checked/>
											<label for="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
										</div>
									</div>
									<div className="form-group text-center add_top_30">
										<input className="btn_1" type="submit" value="Submit"/>
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
	   </div>   
    );
  }
}

export default RegisterForm;