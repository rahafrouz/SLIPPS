import TagsInput from "react-tagsinput";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { SET_TAG, ENABLE_SEARCH_BUTTON } from "../../constants/actionTypes.js";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

const mapStateToProps= (state, ownProps) => {
  return {
    currentTags: state.search.tags[ownProps.type].tags,
    tagsToReturn: state.search.tags,
    allTags: state.search.tags
  };
};
const mapDispatchToProps= dispatch => ({
  setTag: (payload) =>
    dispatch({ type: SET_TAG, payload }),
  enableSearchButton: (payload) => 
    dispatch({ type: ENABLE_SEARCH_BUTTON, payload }),
});

class KeywordsTagged extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(tags) {
    this.props.allTags[this.props.type].tags = tags;
    this.props.setTag({
      "tags": this.props.allTags
    });
    this.props.enableSearchButton({ "enableSearch": true });
  }

  render() {
    const tags = this.props.currentTags;
    return (
      <div style={{paddingTop:"35px"}}>
        <TagsInput value={tags} onChange={this.handleChange} className="form-control tagsinput" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(KeywordsTagged));
