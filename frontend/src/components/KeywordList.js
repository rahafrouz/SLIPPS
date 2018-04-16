import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    popularKeywords: state.app.initData,
  };
};

class KeywordList extends Component {

  render() {
    const keywords = this.props.popularKeywords;
    if (keywords) {
      return (  
        <div className="box_general_3">         
          <ul>
            {
              !(Object.keys(keywords).length === 0) ? 
                keywords.map((kw) => {
                  return (
                    <li>
                      <a href={"/search/" + kw.content}>{kw.content}</a>
                      <hr></hr>
                    </li>
                  );
                }) :
                (<span className="message">No keyword to show</span>)
            }
          </ul>
        </div>    
      );
    } else {
      return (
        <span className="message">No keyword to show</span>
      );
    }

  }
}
export default connect(mapStateToProps, null)(KeywordList);
