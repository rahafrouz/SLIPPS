import React, { Component } from "react";
class KeywordList extends Component {

  render() {
    if (this.props.Keywords) {
      return (  
        <div className="box_general_3">         
          <ul>
            {
              !(Object.keys(this.props.Keywords).length === 0) ? 
                this.props.Keywords.map((kw)=>{return (<li><a href={"/search/"+kw.content}>{kw.content}</a><hr></hr></li>);}) :
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
export default KeywordList;
