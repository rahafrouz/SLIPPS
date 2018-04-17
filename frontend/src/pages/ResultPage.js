import React, { Component } from "react";
import { connect } from "react-redux";

import agent from "../agent";
import Navigation from "../components//Navigation";
import AdvancedSearchResults from "../components/AdvancedSearch/AdvancedSearchResults";
import Footer from "../components/Footer";

import { SET_KEYWORD, SEARCH_BY_KEYWORD } from "../constants/actionTypes";

// var testresults = {"took":8,"timed_out":false,"_shards":{"total":5,"successful":5,"skipped":0,"failed":0},"hits":{"total":1,"max_score":1.2993155,"hits":[{"_index":"slipps","_type":"event","_id":"2","_score":1.2993155,"_source":{"why_relevant":"ANSWER_B_WHY_RELEVANT 2","country":{"name":"Finland","code":"FI"},"@timestamp":"2018-04-02T18:54:16.939Z","keywords":[{"kw_pkey":46,"language_code":"fi","category":"basic","kw_id":3,"content":"Varmistus"},{"kw_pkey":48,"language_code":"fi","category":"basic","kw_id":5,"content":"Ruoka ja ravitsemus"},{"kw_pkey":50,"language_code":"fi","category":"basic","kw_id":7,"content":"Johtajuus"},{"kw_pkey":53,"language_code":"fi","category":"basic","kw_id":10,"content":"Informaation siirto"},{"kw_pkey":74,"language_code":"fi","category":"basic","kw_id":31,"content":"Mielenterveyden/Psykiatrinen osasto/yksikkö"}],"@version":"1","description":"ANSWER_A_EVENT_DESCRIPTION 2","language":{"name":"Finnish","code":"fi"},"id":2,"short_desc":"2 - This is a short version of description to display...","tags":["_aggregatefinalflush"]}}]}};

const mapStateToProps = state => {
  return {
    keyword: state.search.keyword,
    searchResult: state.search.searchResult,
    currentUser: state.app.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  setKeyword: (payload) =>
    dispatch({ type: SET_KEYWORD, payload }),
  searchByKeyword: (payload) =>
    dispatch({ type: SEARCH_BY_KEYWORD, payload })
});

class ResultPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    var keyword = this.props.keyword || this.props.match.params.keyword;
    this.props.setKeyword({ keyword: keyword });
    this.props.searchByKeyword(Promise.all([agent.Search.byKeyword(keyword)]));
  }

  render() {
    var searchResult = this.props.searchResult;
    var result = searchResult != undefined && searchResult.hits ?
      (
        <AdvancedSearchResults showButton="True" />
      ) :
      (<strong>you need to enter a keyword</strong>);
    return (
      <div>
        {result}
      </div>
    );
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
