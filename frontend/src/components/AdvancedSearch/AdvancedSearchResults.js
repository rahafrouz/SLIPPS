import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import EventList from "../EventList";
import AdvancedSearchSuggestions from "./AdvancedSearchSuggestions";
import AdvancedSearchContainer from "./AdvancedSearchContainer";
import { TOGGLE_ADVANCED_SEARCH } from "../../constants/actionTypes";

const mapStateToProps = state => {
  return {
    keyword: state.search.keyword,
    results: state.search.searchResult,
    isAvancedSearchHidden: state.search.isAvancedSearchHidden,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleAdvancedSearch: (payload) =>
    dispatch({ type: TOGGLE_ADVANCED_SEARCH, payload })
});

class AdvancedSearchResults extends Component {
  constructor() {
    super();
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(e) {
    e.preventDefault();
    // this.props.toggleAdvancedSearch({ isAvancedSearchHidden: !this.props.isAvancedSearchHidden});
    this.props.history.push("/advanced-search/");
    // this.setState({
    //   isAvancedSearchHidden: !this.props.isAvancedSearchHidden
    // });
  }

  render() {
    var NumberOfResult = this.props.results.hits.total;
    var Hits = this.props.results.hits.hits;
    var Keywords = this.props.results.hits.hits["0"]?this.props.results.hits.hits["0"]._source.keywords:{};
              
    return (
      <main>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div className="row">
              {/*{button}*/}
              {/*     <div className="col-xl-12 col-lg-12">
                {this.state.AdvancedSearchisHidden && (<div className="box_general_3 cart" >
                  <div className="form-group">
                    <p className="left">{this.props.keyword}</p>
                  </div>
                </div>)}
              </div>*/}
              <a className="advanced-search-link" href="/advanced-search">Advanced Search</a>              
              <div className="col-xl-12 col-lg-12" >
                {!this.props.isAvancedSearchHidden && <AdvancedSearchContainer />}
              </div>
            </div>
          </div>
        </div>
        <div className='gray_background'>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <h5 className='box_title'>
                  <strong>You search for keyword: "{this.props.keyword}"</strong>
                  <hr />
                  Showing 
                  <strong className='violet_text'> {NumberOfResult} </strong> 
                  of 
                  <strong> {NumberOfResult} </strong>
                  results
                  <EventList Hits={Hits} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdvancedSearchResults));
