import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <h5>About</h5>
                <ul className="links">
                  <li><a href="#0">About us</a></li>
                  <li><a href="https://www.slipps.eu/" target="_blank">Terms and conditions</a></li>
                  <li><a href="https://www.slipps.eu/" target="_blank">SLIPPS Official website</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3">
                <h5>Useful links</h5>
                <ul className="links">
                  <li><a href="#0">Learning Events</a></li>
                  <li><a href="#0">Partners</a></li>
                  <li><a href="/upload">Upload Document</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3">
                <h5>Contact with SLIPPS</h5>
                <ul className="contacts">
                  <li><a href="tel://61280932400"><i className="icon_mobile"></i> +44 (0)191 215 6483</a></li>
                  <li><a href="mailto:info@slipps.com"><i className="icon_mail_alt"></i> contact@slipps.eu </a></li>
                </ul>
                
              </div>
              <div className="col-lg-3 col-md-3 follow_us">
                <h5>Follow us</h5>
                <ul>
                  <li><a href="https://www.facebook.com/Slipps-628998603968527"><i className="social_facebook"></i></a></li>
                  <li><a href="https://twitter.com/slipps_eu"><i className="social_twitter"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <ul id="additional_links">
                </ul>
              </div>
              <div className="col-md-4">
                <div id="copy">© 2018 SLIPPS</div>
                <div id="copy">Developed by student group of RSP 2018</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    
    );
  }
}

export default Footer;
