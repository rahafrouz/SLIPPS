import React, { Component } from "react";

class DocumentContent extends Component {
  render() {
    return (  
      <div>
        <h5 className="box_title">Upload an attachment</h5>
        <div className="box_general_3 ">					
          <div className="indent_title_in">
            <h3>Drag file here</h3>
          </div>
          <div className="wrapper_indent">
            <input type="file" />
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentContent;
