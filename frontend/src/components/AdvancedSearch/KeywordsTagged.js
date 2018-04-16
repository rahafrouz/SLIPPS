import TagsInput from "react-tagsinput";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {SET_TAG} from "../../constants/actionTypes.js";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

const mapStateToProps= (state, ownProps) => {
  return {
    currentTags: state.advancedsearch.tags[ownProps.type],
    tagsToReturn: state.advancedsearch.tags,
  };
};
const mapDispatchToProps= dispatch => ({
  setTag: (payload) =>
    dispatch({ type: SET_TAG, payload }),
});

class KeywordsTagged extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(tags) {
    console.warn("inside handleChangee, here are tags:", tags);
    var tag_arr = [];
    // tag_arr=this.props.tagsToReturn;
    tag_arr={ 
      any: { 
        "tags":[
        ],
      },
      "all": [
        tags: [
        ]
      ]
    };

    tag_arr[this.props.type].tags = tags;
    this.props.setTag({
      "tags": tag_arr
    });
  }

  render() {
    return <div style={{paddingTop:"35px"}}><TagsInput value={Object.values(this.props.currentTags)} onChange={this.handleChange} className="form-control tagsinput" /> </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(KeywordsTagged));

