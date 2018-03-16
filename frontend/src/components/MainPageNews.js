import React, { Component } from 'react';
import RecentEvents from './RecentEvents';
import MapView from './MapView';
import PopularKeywords from './PopularKeywords';


class MainPageNews extends Component {
  render() {
    return (
    	<div>
        <div className="container margin_120_95">
          <div className="row">
            <RecentEvents />
            <PopularKeywords />
          </div>
        </div>
      	<MapView />
    	</div>
	
    );
  }
}

export default MainPageNews; 