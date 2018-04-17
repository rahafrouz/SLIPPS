import React, { Component } from "react";


class TermsContent extends Component {
  render() {
    return (
      <div className="col-xl-5 col-lg-5">
        <div className="box_general_3 booking">         
          <div className="indent_title_in">
            <h3>Terms of Use</h3>
          </div>
          <div className="wrapper_indent">
            <h6><strong>Last updated:</strong> 17 April 2018</h6>
            <p>Please, read these terms carefully before uploading the document</p>
            <ul className="bullets">
              <li>I confirm that I have read the information I am uploading.</li>

              <li>I also checked that the file does not include any name of a patient or a medical representative, neither location nor time mentioned.</li> 
              <li>I understand that in case of committing non-anonymized files they will not be published. The administrator will either make changes in the event or return the file to me for further revision if the percent of required changes exceeds 5% of the text.</li>
              <li>I agree that if I upload identical files, only the first upload will be considered. The number of commitment of identical files does not influence the publishing period.</li>
              <li>I confirm that my profile information is valid, my job status is correct and my contact details are updated. Erroneous profiles will be banned once detected by the system administrator.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsContent;
