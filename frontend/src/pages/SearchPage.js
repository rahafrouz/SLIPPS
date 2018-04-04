import React, { Component } from "react";
import Navigation from "../components//Navigation";
import AdvancedSearchResults from "../components/AdvancedSearchResults";
import Footer from "../components/Footer";
import SearchApi from "../apis/SearchApi";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AdvancedSearchResults keyword={this.props.match.params.keyword} />
        <Footer />
      </div>
    
    );
  }

  // dispatch your call on mount
  // since we have `shouldCallAPI` in place
  // we don't need to worry about making pointless requests to the server 
  // if we have more than one component on the page 
  componentDidMount() {
    SearchApi.searchByKeyword(this.props.match.params.keyword);
  }
}

export default SearchPage;
