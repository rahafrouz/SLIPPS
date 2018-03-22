import React, { Component } from 'react';
import SearchContainer from '../components/SearchContainer';
import Navigation from '../components//Navigation';
import AdvancedSearchContainer from '../components/AdvancedSearchContainer';
import Footer from '../components/Footer';

class AdvancedSearch extends Component {
  render() {
    return (
      <div>
       <Navigation />
       <AdvancedSearchContainer />
       <Footer />
      </div>
    
    );
  }
}

export default AdvancedSearch;