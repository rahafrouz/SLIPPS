
import React, { Component } from 'react';
import SearchContainer from '../components/SearchContainer';
import Navigation from '../components//Navigation';
import MainPageNews from '../components/MainPageNews';
import Footer from '../components//Footer';

class MainSearch extends Component {
  render() {
    return (
      <div>
       <Navigation />
       <SearchContainer />
       <MainPageNews />
       <Footer />
      {
       /*
       <SearchBox />
       <Container />
       <Events />
       */ 
      } 

       </div>
    
    );
  }
}

export default MainSearch;
