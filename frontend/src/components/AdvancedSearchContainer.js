import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class AdvancedSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
    this.state={
      "keyword_1":"",
      "enableSearch": false
    };
    this.HandleKeywords= this.HandleKeywords.bind(this);
  }

  goToSearch() {
    var keyword = this.state.keyword_1;
    this.props.history.push("/search/"+keyword);
    this.setState({"keyword_1": keyword});
    window.location.reload();
  }
  HandleKeywords(e){
    this.setState({"keyword_1": e.target.value});
    this.setState({"enableSearch": true});
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
                    <div className="col-md-5 col-sm-5">
                      <div className="form-group adv-search-label">
                        <label >Keyword 1</label>
                        <input type="text" id="keyword_1" name="keyword_1" className="form-control" placeholder="keyword 1" onChange={this.HandleKeywords}/>
                      </div>
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
                          <button onClick={this.goToSearch} className="btn_1 left" disabled={!this.state.enableSearch}>Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </main>   
    );
  }
}

export default withRouter(AdvancedSearchContainer);
