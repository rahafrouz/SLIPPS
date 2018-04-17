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
              <EventLarge eventDetail={item} key={item._source.id}/>
            );})
        }
      </div>
    );
  }
}

export default EventList;
