import React, { Component } from 'react';


class AdvancedSearchContainer extends Component {
  render() {
    return (
		<main>
		  <div className="bg_color_2">
			<div className="container margin_60_35">
			  <div className="col-xl-12 col-lg-12">
				<div className="box_general_3 cart ">
				  <div className="form_title">
						<h3>Advanced Search</h3>
				  </div>

			
				  <div className="step">	
						<div className="row">
							<div className="col-md-5 col-sm-5">
								<div className="form-group">
									<label>Category</label>
									<div className="form-group">
									<select className="form-control" name="category" id="category">
										<option value="">Select category</option>
										<option value="Cardiology">Cardiology</option>
										<option value="Nursery">Nursery</option>
										<option value="Well-being">Well-being</option>
									</select>
								</div>
								</div>
							</div>
							<div className="col-md-5 col-sm-5">
								<div className="form-group adv-search-label">
									<label >Keyword 1</label>
									<input type="text" id="keyword_1" name="keyword_1" className="form-control" placeholder="keyword 1"/>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-5 col-sm-5">
								<div className="form-group">
									<label>Language</label>
									<div className="form-group">
									<select className="form-control" name="language" id="language">
										<option value="">Select language</option>
										<option value="English">English</option>
										<option value="Finnish">Finnish</option>
										<option value="Spanish">French</option>
									</select>
								</div>
								</div>
							</div>
							<div className="col-md-5 col-sm-5">
								<label>Operator</label>
								<div className="form-group">
								    <select className="form-control" name="operator" id="operator">
										<option value="">AND</option>
										<option value="Cardiology">OR</option>
									</select>	
								  </div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-5 col-sm-5">
								<div className="form-group">
									<label>Country</label>
									<div className="form-group">
									<select className="form-control" name="country" id="country">
										<option value="">Select country</option>
										<option value="Cardiology">Finland</option>
										<option value="Nursery">France</option>
										<option value="Well-being">Sweden</option>
									</select>
								</div>
								</div>
							</div>
							<div className="col-md-5 col-sm-5">
								<div className="form-group">
									<label>Keyword 2</label>
									<input type="text" id="keyword_2" name="keyword_2" className="form-control" placeholder="keyword 2"/>
								</div>
							</div>
						</div>
						<div className="row">
						<div className="col-md-5 col-sm-5"></div>
						<div className="col-md-5 col-sm-5">
							<button className='btn_1 floating_right medium'>Search</button>	
						</div>
										
						</div>
						

				  </div>
				</div>
			  </div>	
			</div>
		  </div>
		</main>	
    );
  }
}

export default AdvancedSearchContainer;