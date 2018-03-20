
import React, { Component } from 'react';
import SearchContainer from '../components/SearchContainer';
import Navigation from '../components/Navigation';
import EventDescriptionContent from '../components/EventDescriptionContent';
import EventSuggestions from '../components//EventSuggestions';
import Footer from '../components/Footer';

class EventDescription extends Component {
  render() {
    return (
      <div>
       <Navigation />
       <div style={{backgroundColor: '#F5F8FA'}}>
	       <EventDescriptionContent />
         <EventSuggestions />
       </div>
       <Footer />
      </div>
    
    );
  }
}

export default EventDescription;
