import React, { Component } from 'react';

class SearchContainer extends Component {
  render() {
    return (
    	<div className="hero_home version_1">
			<div className="content">
				<h3>Find a Learning Event!</h3>
				<p>
					More than 100 000 shared events from practice to improve Patient Safety.
				</p>
				
					<div id="custom-search-input">
						<div className="input-group">
							<input type="text" className=" search-query" placeholder="Ex. Well-being, Nursery..."/>
							<input type="submit" className="btn_search" value="Search"/>
						</div>
						<ul><li><p className='advanced-search-link'> Advanced Search </p></li></ul>
					</div>
				
			</div>
		</div>
	
    );
  }
}

export default SearchContainer;