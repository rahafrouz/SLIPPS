import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import SingleKeywordWithOperation from "./SingleKeywordWithOperation.js";
import { connect } from "react-redux";
import { 
  TOGGLE_ADVANCED_SEARCH,
  ENABLE_SEARCH_BUTTON,
  DO_ADVANCED_SEARCH,
  SET_SEARCH_PARAMS,
} from "../../constants/actionTypes";
import KeywordsTagged from "./KeywordsTagged.js";
import AdvancedSearchResults from "./AdvancedSearchResults";
import agent from "../../agent";


const mapStateToProps = state => {
  return {
    keywordTags: state.search.tags,
    singleKeyword: state.search.keyword,
    enableSearch: state.search.enableSearch,
    searchParams: state.search.searchParams,
    searchResult: state.search.searchResult
  };
};

const mapDispatchToProps = dispatch => ({
  enableSearchButton: (payload) => 
    dispatch({ type: ENABLE_SEARCH_BUTTON, payload }),
  doAdvancedSearch: (payload) =>
    dispatch({ type: DO_ADVANCED_SEARCH, payload }),
  setSearchParams: (payload) =>
    dispatch({ type: SET_SEARCH_PARAMS, payload }),
});

class AdvancedSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
    this.languageChange = this.languageChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.categoryChange= this.categoryChange.bind(this);
  }

  goToSearch() {
    this.props.searchParams["keywords_and"] = this.props.keywordTags["all"].tags.join(",");
    this.props.searchParams["keywords_or"] = this.props.keywordTags["any"].tags.join(",");
    
    let promise = Promise.all([agent.Search.advanceSearch(this.props.searchParams)]);
    this.props.doAdvancedSearch(promise);
    this.props.setSearchParams({ searchParams: this.props.searchParams });
  }

  // handleKeywords(e) {
  //   // this.setState({"keyword_1": e.target.value});
  //   // this.setState({"enableSearch": true});
  //   // this.props.enableSearchButton({ "enableSearch": e.target.value != "" });
  // }

  languageChange(e) {
    let value = e.target.value;
    this.props.searchParams["language"] = value;
    this.props.setSearchParams({ searchParams: this.props.searchParams });
  }

  countryChange(e) {
    let value = e.target.value;
    this.props.searchParams["country"] = value;
    this.props.setSearchParams({ searchParams: this.props.searchParams });
  }

  categoryChange(e) {
    let value = e.target.value;
    this.props.searchParams["category"] = value;
    this.props.setSearchParams({ searchParams: this.props.searchParams });
  }

  render() {
    var searchResult = this.props.searchResult;
    var result = searchResult != undefined && searchResult.hits ?
      (<AdvancedSearchResults /> ) :
      (<strong>No events to show!</strong>);
    return (
      <main>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div className="col-xl-12 col-lg-12">
              <div className="box_general_3 cart">
                <div className="form_title">
                  <h3>Advanced Search</h3>
                </div>


                <div className="row step">

                  <div className="col-md-10 col-sm-10 adv-search-kw">
                    <label >Contain ANY of these keywords: (Hit TAB to enter new keyword)</label>
                    <div className="form-group">
                      <KeywordsTagged type="any" className="amiri form-group" id="tags-any"/>
                    </div>  
                  </div>
                  <div className="col-md-10 col-sm-10 adv-search-kw">
                    <label >Contain ALL of these keywords: (Hit TAB to enter new keyword)</label>
                    <div className="form-group">
                      <KeywordsTagged type="all" className="amiri form-group" id="tags-all"/>
                    </div>  
                  </div>
                </div>  

                <div className="step">  
                  <div className="row"> 
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group">
                        <label>Category</label>
                        <div className="form-group">
                          <select className="form-control" name="category" id="category" onChange={this.categoryChange}>
                            <option value="">Select category</option>
                            <option value="Bioanalytics">Bioanalytics</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Nursing science">Nursing science</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Nursing (Nurse)">Nursing (Nurse)</option>
                            <option value="Nursing (Midwife)">Nursing (Midwife)</option>
                            <option value="Nursing (Public health nurse)">Nursing (Public health nurse)</option>
                            <option value="Nursing (Other)">Nursing (Other)</option>
                            <option value="Occupational therapy">Occupational therapy</option>
                            <option value="First aid">First aid</option>
                            <option value="Pharmacy">Pharmacy</option>
                            <option value="Physiotherapy">Physiotherapy</option>
                            <option value="Radiographer">Radiographer</option>
                            <option value="Social work (Children)">Social work (Children)</option>
                            <option value="Social work (Adults)">Social work (Adults)</option>
                            <option value="Social work (Other)">Social work (Other)</option>
                            <option value="Speech therapy">Speech therapy</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group">
                        <label>Language</label>
                        <div className="form-group">
                          <select className="form-control"
                            name="language" id="language"
                            value={this.props.searchParams["language"]}
                            onChange={this.languageChange}>
                            <option value="">Select language</option>
                            <option value="en">English</option>
                            <option value="fi">Finnish</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group">
                        <label>Country</label>
                        <div className="form-group">
                          <select className="form-control" name="country" id="country" 
                            value={this.props.searchParams["country"]} onChange={this.countryChange}>
                            <option value="">Select country</option>
                            <option value="FI">Finland</option>
                            <option value="GB">UK</option>
                            <option value="SE">Sweden</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="row"> 
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>From</label>

                            <select className="form-control" name="from-year" id="from_year">
                              <option value="">From year</option>
                              <option value="2018">2018</option>
                            </select>   
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>To</label>

                            <select className="form-control" name="to-year" id="to_year">
                              <option value="">To year</option>
                              <option value="2018">2018</option>
                            </select>   
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row"> 
                        <div className="col-md-12">
                          <button onClick={this.goToSearch} className="btn_1 left">Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>    
          </div>
        </div>

        <div>
          {result}
        </div>

      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdvancedSearchContainer));

