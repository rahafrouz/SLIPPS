import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <p>
                  <a href="index.html" title="SLIPPS">SLIPPS</a>
                </p>
              </div>
              <div className="col-lg-3 col-md-4">
                <h5>About</h5>
                <ul className="links">
                  <li><a href="#0">About us</a></li>
                  <li><a href="#0">Official website</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <h5>Useful links</h5>
                <ul className="links">
                  <li><a href="#0">Learning Events</a></li>
                  <li><a href="#0">Partners</a></li>
                  <li><a href="/upload">Upload Document</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <h5>Contact with Us</h5>
                <ul className="contacts">
                  <li><a href="tel://61280932400"><i className="icon_mobile"></i> + 358 12 345 67 89</a></li>
                  <li><a href="mailto:info@slipps.com"><i className="icon_mail_alt"></i> help@slipps.com</a></li>
                </ul>
                <div className="follow_us">
                  <h5>Follow us</h5>
                  <ul>
                    <li><a href="#0"><i className="social_facebook"></i></a></li>
                    <li><a href="#0"><i className="social_twitter"></i></a></li>
                    <li><a href="#0"><i className="social_linkedin"></i></a></li>
                    <li><a href="#0"><i className="social_instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <ul id="additional_links">
                  <li><a href="#0">Terms and conditions</a></li>
                  <li><a href="#0">Privacy</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <div id="copy">© 2018 SLIPPS</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    
    );
  }
}

export default Footer;
