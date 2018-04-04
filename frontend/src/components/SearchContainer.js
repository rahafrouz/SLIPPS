import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
    this.enterKeyword = this.enterKeyword.bind(this);
    this.state = { 
      keyword: ""
    };
  }

  enterKeyword(e) {
    this.setState({ keyword: e.target.value });
  }

  goToSearch() {
    this.props.history.push("/search/" + this.state.keyword);
    // browserHistory.push("/search");
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
            <div className="input-group">
              <input type="text" className=" search-query" placeholder="Ex. Well-being, Nursery, Healthcare..." onChange={this.enterKeyword}/>
              {/*<input type="submit" className="btn_search" value="Search"/>*/}
              <input type="submit" onClick={this.goToSearch} className="btn_search" value="Search" />
            </div>
            <ul><li><a href="/advanced-search" className="advanced-search-link"> Advanced Search </a></li></ul>
          </div>
        
        </div>
      </div>
    );
  }
}

export default withRouter(SearchContainer);
