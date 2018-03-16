import React, { Component } from 'react';

class PopularKeywords extends Component {
  render() {
    return (
    		<aside className="col-xl-4 col-lg-4" id="sidebar">
					<div className="box_general_3 booking">
							<div className="title">
							<h3>Popular Keywords</h3>
							</div>						
							<ul className="treatments clearfix">
								<li><p>Keyword 1</p></li>
								<li><p>Keyword 2</p></li>
								<li><p>Keyword 3</p></li>
								
							</ul>
							<hr></hr>
					</div>
				</aside> 
   	
	
    );
  }
}

export default PopularKeywords;