import React, { Component } from "react";
// import ReactDOM from "react-dom";
import EventList from "./EventList";
// import KeywordList from "./KeywordList";
import AdvancedSearchSuggestions from "./AdvancedSearchSuggestions";
import AdvancedSearchContainer from "./AdvancedSearchContainer";





class AdvancedSearchResults extends Component {
  constructor () {
    super();
    this.state = {
      AdvancedSearchisHidden: true
    };
  }
  toggleHidden () {
    this.setState({
      AdvancedSearchisHidden: !this.state.AdvancedSearchisHidden
    });
  }

  render() {
    var NumberOfResult = this.props.results.hits.total;
    var Hits = this.props.results.hits.hits;
    var Keywords = this.props.results.hits.hits["0"]?this.props.results.hits.hits["0"]._source.keywords:{};
    console.warn(this.props);
    return (
      <main>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div className="row">
              {/*     <div className="col-xl-12 col-lg-12">
                {this.state.AdvancedSearchisHidden && (<div className="box_general_3 cart" >
                  <div className="form-group">
                    <p className="left">{this.props.keyword}</p>
                  </div>
                </div>)}
              </div>*/}
              <div className="col-xl-2 col-lg-2">
                <ul>
                  <li>
                    <button className="advanced-search-link" onClick={this.toggleHidden.bind(this)}>
                      <a>Advanced Search</a>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-xl-12 col-lg-12" >
                {!this.state.AdvancedSearchisHidden && <AdvancedSearchContainer  />}
              </div>
            </div>
          </div>
        </div>
        <div className='gray_background'>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <h5 className='box_title'>
                  <strong>You search for: KEYWORD == {this.props.keyword} AND COUNTRY == "Finland"</strong>
                  <hr />
                  <EventList Hits={Hits} />

                  Showing 
                  <strong className='violet_text'> {NumberOfResult} </strong> 
                  of 
                  <strong> {NumberOfResult} </strong>
                  results
                </h5>
              </div>
              <div className="col-xl-4 col-lg-4">
                <AdvancedSearchSuggestions Keywords={Keywords} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AdvancedSearchResults;
