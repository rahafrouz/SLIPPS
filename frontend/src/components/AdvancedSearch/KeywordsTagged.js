import TagsInput from "react-tagsinput";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {SET_TAG} from "../../constants/actionTypes.js";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

const mapStateToProps= (state,ownProps) =>{
  return{
    CurrentTags: state.advancedsearch.tags[ownProps.type]
  };
};
const mapDispatchToProps= dispatch =>({
  setTag: (payload) =>
    dispatch({ type: SET_TAG, payload }),
});

class KeywordsTagged extends React.Component {
  constructor() {
    super();
    // this.props.tags = [];
    // this.state = {tags: []};
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(tags) {
  //   this.props.setTag({tags});

  // }
  handleChange(tags) {
    // this.setState({tags});
    console.warn("inside handleChangee, here are tags:",tags);
    this.props.setTag({"TagType":this.props.type,
      tags});
  }

  render() {
    return <TagsInput value={this.props.CurrentTags} onChange={this.handleChange} /> ;
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)with(KeywordsTagged);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(KeywordsTagged));
//      
