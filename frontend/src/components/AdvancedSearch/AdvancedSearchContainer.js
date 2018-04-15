import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import SingleKeywordWithOperation from "./SingleKeywordWithOperation.js";
import { connect } from "react-redux";
import { 
  TOGGLE_ADVANCED_SEARCH,
  ENABLE_SEARCH_BUTTON,
} from "../../constants/actionTypes";
import KeywordsTagged from "./KeywordsTagged.js";


const mapStateToProps = state => {
  //state.AdvancedSearch?
  return {
    // keywords: state.AdvancedSearch.KeyWords,
    single_keyword: state.search.keyword,
    enableSearch: state.advancedsearch.enableSearch
  };
};

const mapDispatchToProps = dispatch => ({
  enableSearchButton: (payload) => 
    dispatch({ type: ENABLE_SEARCH_BUTTON, payload }),
});


class AdvancedSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
    // this.state={
    //   "keyword_1":"",
    //   "enableSearch": false
    // };
    this.handleKeywords= this.handleKeywords.bind(this);
  }

  goToSearch() {
    var keyword = this.state.keyword_1;
    this.props.history.push("/search/"+keyword);
    this.setState({"keyword_1": keyword});
    window.location.reload();
  }

  handleKeywords(e) {
    // this.setState({"keyword_1": e.target.value});
    // this.setState({"enableSearch": true});
    this.props.enableSearchButton({ "enableSearch": e.target.value != "" });
  }

  render() {
    return (
      <main>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div className="col-xl-12 col-lg-12">
              <div className="box_general_3 cart">
                <div className="form_title">
                  <h3>Advanced Search</h3>
                </div>
                <div className="step">    
                  <div className="row">
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group">
                        <label>Category</label>
                        <div className="form-group">
                          <select className="form-control" name="category" id="category">
                            <option value="">Select category</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Nursery">Nursery</option>
                            <option value="Well-being">Well-being</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5 adv-search-kw">
                      <div className="form-group adv-search-label">
                        <label >Keyword 1</label>
                        <input type="text" id="single_keyword" name="single_keyword" 
                          className="form-control" placeholder="keyword 1" onChange={this.handleKeywords}/>
                      </div>
                      <span className="error_message">* Please enter a keyword</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group">
                        <label>Language</label>
                        <div className="form-group">
                          <select className="form-control" name="language" id="language">
                            <option value="">Select language</option>
                            <option value="English">English</option>
                            <option value="Finnish">Finnish</option>
                            <option value="Spanish">French</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <label>Operator</label>
                      <div className="form-group">
                        <select className="form-control" name="operator" id="operator">
                          <option value="">AND</option>
                          <option value="Cardiology">OR</option>
                        </select>   
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group">
                        <label>Country</label>
                        <div className="form-group">
                          <select className="form-control" name="country" id="country">
                            <option value="">Select country</option>
                            <option value="Cardiology">Finland</option>
                            <option value="Nursery">France</option>
                            <option value="Well-being">Sweden</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group">
                        <label>Keyword 2</label>
                        <input type="text" id="keyword_2" name="keyword_2" className="form-control" placeholder="keyword 2"/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5">
                      <div className="row"> 
                        <div className="col-md-6">
                          <div className="form-group">
                            <select className="form-control" name="from-year" id="from_year" disabled>
                              <option value="">From year</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                            </select>   
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <select className="form-control" name="to-year" id="to_year" disabled>
                              <option value="">To year</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                            </select>   
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row"> 
                        <div className="col-md-12">
                          <button onClick={this.goToSearch} className="btn_1 left" disabled={!this.props.enableSearch}>Search</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<SingleKeywordWithOperation Operator="and" ErrorMessage="true" KeywordId="3" />*/}
                  <div className="col-md-2 col-sm-2">
                    <button className="btn_1 left" style={{marginTop:"40px"}}>Add</button>
                  </div>
                  <KeywordsTagged type="any"/>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </main>   
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdvancedSearchContainer));

