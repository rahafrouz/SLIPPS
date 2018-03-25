import React, { Component } from 'react';
import EventSmall from './EventSmall';

class SavedEvents extends Component {
  render() {
    return (
      <div>
        <div className="container margin_40_35">
        <h4 style={{textAlign: 'left', paddingLeft: '10px', paddingBottom: '5px'}}>Saved Events</h4>
          <div className="row">
           <EventSmall/>
           <EventSmall/>
          </div>
          <div className="row">
           <EventSmall/>
           <EventSmall/>
          </div>
          <div><button className='btn_1'>Load more</button></div>
        </div>
        </div>
  
    );
  }
}

export default SavedEvents; 