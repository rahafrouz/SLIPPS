import React, { Component } from 'react';
import MapView from './MapView';
import KeywordList from './KeywordList';
import EventLarge from './EventLarge';


class MainPageNews extends Component {
  render() {
    return (
    	<div>
        <div className="container margin_120_95">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <h4 className='box_title'>Recent Events </h4>
              <EventLarge />
              <EventLarge />
            </div>
            <div className="col-xl-4 col-lg-4">
            <h4 className='box_title'>Popular Keywords</h4>
            <KeywordList />
            </div>
          </div>
        </div>
      	<MapView />
    	</div>
	
    );
  }
}

export default MainPageNews; 