import React, { Component } from 'react';
import Navigation from '../components//Navigation';
import AdvancedSearchResults from '../components/AdvancedSearchResults';
import Footer from '../components/Footer';

class SearchPage extends Component {
  render() {
    return (
      <div>
       <Navigation />
       <AdvancedSearchResults />
       <Footer />
      </div>
    
    );
  }
}

export default SearchPage;
