import React, { Component } from "react";
import EventLarge from "./EventLarge";

class EventList extends Component {
  render() {
    //var Events = Hits.map(Event=>`<EventLarge EventDetail=${Object.values(Event)}/>`);

    return (
      <div>
        { 
          this.props.Hits.map( (item) => {
            return ( 
              <EventLarge EventDetail={item}/>
            );})
        }
      </div>
    );
  }
}

export default EventList;
