import React, { Component } from "react";

class TermsAndCondtions extends Component {
  render() {
    return (
      <div className="gray_background">
        <div className="padd-top-10 padd-bottom-10">
          <h4 className="about-title padd-bottom-10">Terms and Conditions</h4>
          <p className="about-content">
            <h6>General Terms of Use</h6>
            <ul className="bullets">
              <li>Registration on the website is necessary to view full details of search, upload and download learning events as well as save events which interest me for further reference.</li>
              <li>Users without an account will have access to a limited information concerning the search results and cannot upload or download learning events, neither save them for further reference.</li>
            </ul>
          </p>
          <p className="about-content">
            <h6>Profile</h6>
            <ul className="bullets">
              <li>I confirm that my profile information is valid and my contact details are updated. Inappropriate profiles will be banned once detected by the system administrator.</li>
              <li>I agree to provide my email address, which is collected in order to inform me about my activity on the website, namely my history of uploaded documents.</li>
              <li>I agree to provide my working place and my name in order to personalize my profile and check its the validity.</li>
            </ul>
          </p>
          <p className="about-content">
            <h6>Documents Uploading</h6>
            <ul className="bullets">
              <li>I confirm that I am responsible for the information I am uploading.</li>
              <li>I agree to check the file for anonymity, i.e. it must not include names of patients or medical representatives, neither exact location nor time.</li>
              <li>I understand that in case of committing non-anonymized files they will not be published.</li>
              <li>I agree that if I upload identical files, only the first upload will be considered. The number of commitment of identical files does not influence the publishing period.</li>
              <li>The information I am uploading does not contain inappropriate or abusive language and does not violate the rights of other users.</li>
            </ul>
          </p>
          <p className="about-content">
            <h6>Pre-downloading questionnaire</h6>
            <ul className="bullets">
              <li>I understand that a user can either fill or skip a questionnaire before downloading a learning event.</li>
              <li>I understand that my work location, field of interest and profession are needed for the statistical purposes of assessing project activity in participating countries and are shown exclusively to system administrators.</li>
              <li>I agree to answer questions regarding my interest in downloading a learning event, which are necessary for estimating the correspondence of the website intial goals and outcomes regarding the target audience.</li>
            </ul>
          </p>
        </div>
      </div>    
    );
  }
}

export default TermsAndCondtions;
