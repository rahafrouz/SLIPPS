import React, { Component } from "react";

class DocumentPreview extends Component {
  render() {
    return (
      <div className="col-xl-5 col-lg-5">
        <h5 style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "5px"}}>Document Preview</h5>
        <div className="box_general_3 document_preview">
        </div>
      </div> 
    );
  }
}

export default DocumentPreview;
