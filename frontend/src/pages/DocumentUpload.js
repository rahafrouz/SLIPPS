import React, { Component } from "react";
// import DocumentContent from "../components/DocumentContent";
// import DocumentDescription from "../components/DocumentDescription";
// import TermsAgreement from "../components/TermsAgreement";
// import DocumentPreview from "../components//DocumentPreview";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { UPLOAD_DOCUMENT } from "../constants/actionTypes";

import agent from "../agent";
// import Footer from "../components/Footer";
// import Navigation from "../components/Navigation";

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

  render() {
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
              <Footer />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentUpload);
