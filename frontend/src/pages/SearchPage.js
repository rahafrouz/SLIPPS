/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React, { Component } from "react";
import Navigation from "../components//Navigation";
import AdvancedSearchResults from "../components/AdvancedSearchResults";
import Footer from "../components/Footer";
import request from "superagent";

// var testresults = {"took":8,"timed_out":false,"_shards":{"total":5,"successful":5,"skipped":0,"failed":0},"hits":{"total":1,"max_score":1.2993155,"hits":[{"_index":"slipps","_type":"event","_id":"2","_score":1.2993155,"_source":{"why_relevant":"ANSWER_B_WHY_RELEVANT 2","country":{"name":"Finland","code":"FI"},"@timestamp":"2018-04-02T18:54:16.939Z","keywords":[{"kw_pkey":46,"language_code":"fi","category":"basic","kw_id":3,"content":"Varmistus"},{"kw_pkey":48,"language_code":"fi","category":"basic","kw_id":5,"content":"Ruoka ja ravitsemus"},{"kw_pkey":50,"language_code":"fi","category":"basic","kw_id":7,"content":"Johtajuus"},{"kw_pkey":53,"language_code":"fi","category":"basic","kw_id":10,"content":"Informaation siirto"},{"kw_pkey":74,"language_code":"fi","category":"basic","kw_id":31,"content":"Mielenterveyden/Psykiatrinen osasto/yksikkö"}],"@version":"1","description":"ANSWER_A_EVENT_DESCRIPTION 2","language":{"name":"Finnish","code":"fi"},"id":2,"short_desc":"2 - This is a short version of description to display...","tags":["_aggregatefinalflush"]}}]}};
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testResult: {}
    };
  }
  render() {
    const result = this.state.testResult.hits ? (
      <AdvancedSearchResults keyword={this.props.match.params.keyword} results={this.state.testResult} />
    ) : (<strong>you need to enter a keyword</strong>);
    return (
      <div>
        <Navigation />
        {result}
        <Footer />
      </div>
    
    );
  }

  // dispatch your call on mount
  // since we have `shouldCallAPI` in place
  // we don't need to worry about making pointless requests to the server 
  // if we have more than one component on the page 
  componentWillMount() {
    request
      .get("http://157.24.191.55:8000/api/search")
      .query({ kw: this.props.match.params.keyword }) // sends a JSON post body
      .set("content-type", "json")
      .end((err, res) => {
        this.setState({
          testResult: res.body
        });
        this.forceUpdate();
      });
    // SearchApi.searchByKeyword(this.props.match.params.keyword);
  }
}

export default SearchPage;
