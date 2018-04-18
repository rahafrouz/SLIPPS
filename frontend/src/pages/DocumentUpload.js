import React, { Component } from "react";
// import DocumentContent from "../components/DocumentContent";
// import DocumentDescription from "../components/DocumentDescription";
// import TermsAgreement from "../components/TermsAgreement";
// import DocumentPreview from "../components//DocumentPreview";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { UPLOAD_DOCUMENT } from "../constants/actionTypes";

import agent from "../agent";

const mapStateToProps = store => {
  return {
    currentUser: store.app.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (data, filename) => {
    const payload = agent.Common.uploadDoc(data, filename);
    dispatch({ type: UPLOAD_DOCUMENT, payload });
  }
});

class DocumentUpload extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.state = {
      description: "",
      termsChecked: false,
      enableSubmit: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ enableSubmit: false });

    // Only submit form if term agreement is checked!
    if (this.state.termsChecked) {
      let data = new FormData();
      data.append("file", this.fileInput.files[0]);
      data.append("description", this.state.description);

      this.props.onSubmit(data, this.fileInput.files[0].name);
      this.props.history.push("/profile");
    }
  }

  handleFileChange(e) {
    let enabled = this.state.termsChecked && this.state.description != "" && this.fileInput.files.length>0;
    this.setState({ 
      enableSubmit: enabled
    });
  }

  handleInputChanged(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    let enabled = value && value != "" && this.fileInput.files.length>0;

    this.setState({ enableSubmit: enabled });
  }

  renderOld() {
    if (this.props.currentUser) {
      return (
        <main>
          <div className="bg_color_2">
            <div className="container margin_60_35">
              <div className="gray_background col-xl-12 col-lg-12">
                <div className="container margin_120_95">
                  <div className="row">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group" >
                        <h5 className="box_title">Upload an attachment</h5>
                        <div className="box_general_3 ">          
                          <div className="indent_title_in">
                            <h3>Drag file here</h3>
                          </div>
                          <div className="wrapper_indent form-group">
                            <input type="file" className="form-control" onChange={this.handleFileChange}
                              ref={ input => { this.fileInput = input; }}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "5px", paddingTop: "20px"}}>Description</h5>
                        <textarea className="document_description"
                          value={this.state.description}
                          onChange={this.handleInputChanged} name="description">
                        </textarea>
                      </div>
                      <div>
                        <h5 style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "5px", paddingTop: "20px"}}>Terms of use</h5>
                        <div className="box_general_3"> 
                          <div className='form_group' style={{textAlign: "left"}} >
                            <label>
                              <input type="checkbox" style={{paddingRight: "10px"}}
                                checked={this.state.termsChecked} name="termsChecked" onChange={this.handleInputChanged} />
                              <span> I read and agree with the <strong>Terms of use</strong></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      {/*<button className="btn_1 width_20 medium" disabled={!this.state.enableSubmit}>Upload</button>*/}
                      <button className="btn_1 width_20 medium">Upload</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    } else {
      return (
        <div className="gray_background">

          <h3>You need to login to view this page.</h3>
          <p>
            Go to <Link to="/register" className="nav-link">Signup</Link> for a new account
          </p>
          <p>
            Or <Link to="/login" className="nav-link">Login</Link>
          </p>
        </div>
      );
    }
    
  }



  render(){
    if (this.props.currentUser) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="upload-page container margin_60">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="box_general_3 cart">
                  <div className="form_title">
                    <h3><strong>1</strong>Upload The Document</h3>
                    <p>
                  Upload the document generated from LERT tool.
                    </p>
                  </div>
                  <div className="step first-step">
                    <div className="box_general_3 ">          
                      <div className="indent_title_in">
                        <h3>Drag file here</h3>
                      </div>
                      <div className="wrapper_indent form-group">
                        <input type="file" className="form-control" onChange={this.handleFileChange}
                          ref={ input => { this.fileInput = input; }}
                        />
                      </div>
                    </div>  
                  </div>
                  <hr />
                  {/*End step */}
                  <div className="form_title">
                    <h3><strong>2</strong>Add Description</h3>
                    <p>
                      Add description regarding the file you are uploading.
                    </p>
                  </div>
                  {/*<div className="step second-step">
                    <textarea className="document_description"
                      value={this.state.description}
                      onChange={this.handleInputChanged} name="description">
                    </textarea>
                  </div>*/}
                  <hr />
                  {/*End step */}



                </div>
              </div>
              {/* /col */}
              <aside className="col-xl-4 col-lg-4" id="sidebar">
                <div className="box_general_3 booking">
                  <form>
                    <div className="form_title">
                      <h3><strong>3</strong>Upload!</h3>
                      <p>Careful!</p>
                    </div>
                    <ul className="treatments checkout clearfix">
                      <li>
                    Your document should be anonymized using LERT tool.
                      </li>
                      <li>
                      You are responsible for the provided data.
                      </li>
                      <li >
                    Your document would be approved by admin and you will be notified.
                      </li>
                    </ul>
                    <hr />
                    <label>
                      <input type="checkbox" style={{paddingRight: "10px"}}
                        checked={this.state.termsChecked} name="termsChecked" onChange={this.handleInputChanged} />
                      <span> I read and agree with the <strong>Terms of use</strong></span>
                    </label>
                    <button className="btn_1 width_20 medium">Accept and Upload</button>
                  </form>
                </div>
                {/* /box_general */}
              </aside>
              {/* /asdide */}
            </div>
            {/* /row */}
          </div>
        </form>
      );
    } else {
      return (
        <div id="error_page">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-xl-7 col-lg-9">
                <h2>:-( <i class="icon_error-triangle_alt"></i></h2>
                <p>We're sorry, but you need to login to see this page</p>
                <p>
                  <Link to="/signup" className="nav-link">Sign Up for a new account</Link>
                  Or <Link to="/login" className="nav-link">Log In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }






}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentUpload);
