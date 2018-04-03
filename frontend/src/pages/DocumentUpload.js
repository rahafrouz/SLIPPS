import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import DocumentContent from '../components/DocumentContent';
import DocumentDescription from '../components/DocumentDescription';
import TermsAgreement from '../components/TermsAgreement';
import DocumentPreview from '../components//DocumentPreview';
import Footer from '../components/Footer';

class DocumentUpload extends Component {
  render() {
    return (
      <div>
       <Navigation />
       <div className='gray_background'>
       <div className="container margin_120_95">
          <div className="row">
          <div className="col-xl-7 col-lg-7">
	       <DocumentContent/>
         <DocumentDescription/>
         <TermsAgreement/>
         <button className='btn_1 width_50 medium'>Publish</button>
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

export default DocumentUpload;
