import React, { Component } from "react";
import Navigation from "../components/Navigation";
import DocumentContent from "../components/DocumentContent";
import DocumentDescription from "../components/DocumentDescription";
import TermsAgreement from "../components/TermsAgreement";
import DocumentPreview from "../components//DocumentPreview";
import Footer from "../components/Footer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class DocumentUpload extends Component {
  render() {
    return (
      <div>
        <Navigation currentUser={this.props.currentUser} />
        <div className="gray_background">
          <div className="container margin_120_95">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <DocumentContent/>
                <DocumentDescription/>
                <TermsAgreement/>
                <button className="btn_1 width_50 medium">Publish</button>
              </div>
              <DocumentPreview/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
    );
  }
}

export default connect(mapStateToProps, null)(DocumentUpload);
