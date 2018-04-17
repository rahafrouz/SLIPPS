import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

import agent from "../agent";
import { SET_KEYWORD, SEARCH_BY_KEYWORD } from "../constants/actionTypes";
import { store } from "../store";
import { push } from "react-router-redux";

// Map data stored in state to props if you need to use it here.
const mapStateToProps = store => {
  return {
    searchResult: store.search.searchResult,
    keyword: store.search.keyword,
    advancedFilters: store.search.advancedFilters
  };
};

// Map data stored in state to props if you need to use it here.
const mapDispatchToProps = dispatch => ({
  setKeyword: (payload) =>
    dispatch({ type: SET_KEYWORD, payload }),
  searchByKeyword: (payload) =>
    dispatch({ type: SEARCH_BY_KEYWORD, payload })
});


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
    this.handleKeywordChanged = this.handleKeywordChanged.bind(this);
    this.state = {
      enableSearch: false
    };
  }

  handleKeywordChanged(e) {
    this.props.setKeyword({ keyword: e.target.value });
    this.setState({
      enableSearch: e.target.value != ""
    });
  }

  goToSearch(e) {
    e.preventDefault();
    var keyword = this.props.keyword;
    var promise = Promise.all(agent.Search.byKeyword(keyword));

    this.props.searchByKeyword(promise);
    this.props.history.push(`/search/${keyword}`);
  }

  render() {
    return (
      <div className="hero_home version_1">
        <div className="content">
          <h3>Find a Learning Event!</h3>
          <p>
            More than 100 000 shared events from practice to improve Patient Safety.
          </p>
        
          <div id="custom-search-input">
            <form className="input-group" onSubmit={this.goToSearch}>
              <input type="text" className=" search-query" placeholder="Ex. Well-being, Nursery, Healthcare..." 
                onChange={this.handleKeywordChanged} />
              {/*<input type="submit" className="btn_search" value="Search"/>*/}
              <input type="submit" className="btn_search" 
                onClick={this.goToSearch} disabled={!this.state.enableSearch} value="Search" />
            </form>
            <ul><li><a href="/advanced-search" className="advanced-search-link"> Advanced Search </a></li></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchContainer));
