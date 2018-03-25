import React, { Component } from 'react';

class TermsAgreement extends Component {
  render() {
    return (  
    <div>
	  <h5 style={{textAlign: 'left', paddingLeft: '10px', paddingBottom: '5px', paddingTop: '20px'}}>Terms of use</h5>
	  <div className="box_general_3">	
	    <div className='form_group' style={{textAlign: 'left'}} >				
			<label>
				<input type="checkbox" style={{paddingRight: '10px'}}/>
			      I read and agree with <strong>Terms of use</strong>       
			</label>
		</div>
	  </div>
	</div>
    );
  }
}

export default TermsAgreement; 