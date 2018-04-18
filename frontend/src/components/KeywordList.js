import React, { Component } from "react";
import { connect } from "react-redux";

// const mapStateToProps = state => {
//   return {
//     popularKeywords: state.app.initData["keyword_hits"] || [],
//   };
// };

class KeywordList extends Component {

  render() {
    const keywords = this.props.Keywords;
    return (  
      <div className="box_general_3">         
        {
          (keywords && keywords.length > 0) ? 
            (<ul>
              {
                keywords.map((kw, ind) => {
                  return (
                    <li key={ind}>
                      <a href={"/search/" + kw.text || kw.content }>{kw.text || kw.content}</a>
                      <hr></hr>
                    </li>
                  );
                })
              }
            </ul> ) : (<span className="message">No keyword to show</span>
            )
        }
      </div>    
    );
  }
}
export default KeywordList;
