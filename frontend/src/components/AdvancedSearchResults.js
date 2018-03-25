import React, { Component } from 'react';
import EventLarge from './EventLarge';
import KeywordList from './KeywordList';
import AdvancedSearchSuggestions from './AdvancedSearchSuggestions';

class AdvancedSearchResults extends Component {
  render() {
    return (  
    	<div className='gray_background'>
	      <div className="container margin_60_35">
	        <div className="row">
	          <div className="col-xl-8 col-lg-8">
	          	<h5 className='box_title'>
	          		Showing 
	          		<strong className='violet_text'> 10 </strong> 
	          		of 
	          		<strong> 100 </strong>
	          		results</h5>
			    <EventLarge />
		       </div>
		       <div className="col-xl-4 col-lg-4">
		       <AdvancedSearchSuggestions />
		       </div>
	        </div>
	      </div>
        </div>
    );
  }
}

export default AdvancedSearchResults; 