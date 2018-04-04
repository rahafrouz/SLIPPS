import React, { Component } from "react";
class KeywordList extends Component {

  render() {
    if(this.props.Keywords)
    {
      return (  
        <div className="box_general_3">         
          <ul >
            {!(Object.keys(this.props.Keywords).length === 0)?this.props.Keywords.map((kw)=>{return (<li><a href={"/search/"+kw.content}>{kw.content}</a><hr></hr></li>);}):"nothing"}
          </ul>
        </div>    
      );
    }else
    {
      return "nothing";
    }

  }
}
export default KeywordList;
