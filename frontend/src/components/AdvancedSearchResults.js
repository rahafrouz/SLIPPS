import React, { Component } from "react";
import EventLarge from "./EventLarge";
// import KeywordList from "./KeywordList";
import AdvancedSearchSuggestions from "./AdvancedSearchSuggestions";

class AdvancedSearchResults extends Component {
  render() {
    return (
      <main>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="box_general_3 cart" style={{padding: 30 + "px"}}>
                  <div className="form-group">
                    <p className="left">You search for: KEYWORD == {this.props.keyword} AND COUNTRY == "Finland"</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <ul>
                  <li>
                    <a href="/advanced-search" className=''> Advanced Search </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='gray_background'>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <h5 className='box_title'>
                  Showing 
                  <strong className='violet_text'> 10 </strong> 
                  of 
                  <strong> 100 </strong>
                  results
                </h5>
                <EventLarge />
              </div>
              <div className="col-xl-4 col-lg-4">
                <AdvancedSearchSuggestions />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AdvancedSearchResults;
