import React, { Component } from "react";
// import {withRouter} from "react-router-dom";
// import { connect } from "react-redux";

// import { store } from "../../store";
// import { push } from "react-router-redux";


class SingleKeywordWithOperation extends Component {

  render() {
    var AddButton = this.props.AddButton? (
      <div className="col-md-2 col-sm-2">
        <button className="btn_1 left" style={{"margin-top":"40px"}}>Add</button>
      </div>
    ):null;

    var ErrorMessage = this.props.ErrorMessage?(
      <label>
        <span className="error_message left" style={{"margin":"0"}}> * Please enter a keyword</span>
      </label>
    ):null;
    var KeywordId= this.props.KeywordId;

    return (
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="form-group adv-search-label">
            <label >Keyword {KeywordId} &nbsp; </label>
            {ErrorMessage}
            <input type="text" id="keyword_1" name="keyword_1" className="form-control" placeholder="keyword 1" onChange={this.HandleKeywords}/>
          </div>
        </div>
        <div className="col-md-3 col-sm-3 adv-search-kw">
          <label>Operator</label>
          <div className="form-group">
            <select className="form-control" name="operator" id="operator">
              <option value="">AND</option>
              <option value="Cardiology">OR</option>
            </select>   
          </div>
        </div>
        {AddButton}
      </div>
    );
  }
}

export default SingleKeywordWithOperation;
