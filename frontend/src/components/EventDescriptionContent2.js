import React, { Component } from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";




const mapStateToProps = state => {
  return {
    EventDetail: state.search.eventFull
  };
};

class EventDescriptionContent2 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.warn(this.props);
    return (
      <div id="page">     
        <main>
          <div id="breadcrumb">
            <div className="container">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Category</a></li>
                <li>Page active</li>
              </ul>
            </div>
          </div>
          {/*<!-- /breadcrumb -->*/}

          <div className="container margin_60 event-title">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <nav id="secondary_nav">
                  <h3> sdfdssfdasfds</h3>
                </nav>
                <div id="section_1">
                  <div className="box_general_3">
                    <div className="profile">
                      <div className="row">
                        <div className="col-lg-5 col-md-4">
                          <figure>
                            <img src="http://via.placeholder.com/565x565.jpg" alt="" className="img-fluid"/>
                          </figure>
                        </div>
                        <div className="col-lg-7 col-md-8">
                          <small>Primary care - Internist</small>
                          <h1>DR. Julia Jhones</h1>
                          <span className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                            <small>(145)</small>
                            <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
                          </span>
                          <ul className="statistic">
                            <li>854 Views</li>
                            <li>124 Patients</li>
                          </ul>
                          <ul className="contacts">
                            <li>
                              <h6>Address</h6>
                        2726 Shinn Street, New York -
                              <a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank"> <strong>View on map</strong></a>
                            </li>
                            <li>
                              <h6>Phone</h6> <a href="tel://000434323342">+00043 4323342</a> - <a href="tel://000434323342">+00043 4323342</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
              
                    <hr/>
              
                    {/*<!-- /profile -->*/}
                    <div className="indent_title_in">
                      <i className="pe-7s-user"></i>
                      <h3>Professional statement</h3>
                      <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                    </div>
                    <div className="wrapper_indent">
                      <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
                      <h6>Specializations</h6>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="bullets">
                            <li>Abdominal Radiology</li>
                            <li>Addiction Psychiatry</li>
                            <li>Adolescent Medicine</li>
                            <li>Cardiothoracic Radiology </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="bullets">
                            <li>Abdominal Radiology</li>
                            <li>Addiction Psychiatry</li>
                            <li>Adolescent Medicine</li>
                            <li>Cardiothoracic Radiology </li>
                          </ul>
                        </div>
                      </div>
                      {/*<!-- /row-->*/}
                    </div>
                    {/*<!-- /wrapper indent -->*/}

                    <hr/>

                    <div className="indent_title_in">
                      <i className="pe-7s-news-paper"></i>
                      <h3>Education</h3>
                      <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                    </div>
                    <div className="wrapper_indent">
                      <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
                      <h6>Curriculum</h6>
                      <ul className="list_edu">
                        <li><strong>New York Medical College</strong> - Doctor of Medicine</li>
                        <li><strong>Montefiore Medical Center</strong> - Residency in Internal Medicine</li>
                        <li><strong>New York Medical College</strong> - Master Internal Medicine</li>
                      </ul>
                    </div>
                    {/*<!--  End wrapper indent -->*/}

                    <hr/>

                    <div className="indent_title_in">
                      <i className="pe-7s-cash"></i>
                      <h3>Prices &amp; Payments</h3>
                      <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                    </div>
                    <div className="wrapper_indent">
                      <p>Zril causae ancillae sit ea. Dicam veritus mediocritatem sea ex, nec id agam eius. Te pri facete latine salutandi, scripta mediocrem et sed, cum ne mundi vulputate. Ne his sint graeco detraxit, posse exerci volutpat has in.</p>
                      <table className="table table-responsive table-striped">
                        <thead>
                          <tr>
                            <th>Service - Visit</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>New patient visit</td>
                            <td>$34</td>
                          </tr>
                          <tr>
                            <td>General consultation</td>
                            <td>$60</td>
                          </tr>
                          <tr>
                            <td>Back Pain</td>
                            <td>$40</td>
                          </tr>
                          <tr>
                            <td>Diabetes Consultation</td>
                            <td>$55</td>
                          </tr>
                          <tr>
                            <td>Eating disorder</td>
                            <td>$60</td>
                          </tr>
                          <tr>
                            <td>Foot Pain</td>
                            <td>$35</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*<!--  /wrapper_indent -->*/}
                  </div>
                  {/*<!-- /section_1 -->*/}
                </div>
                {/*<!-- /box_general -->*/}

                <div id="section_2">
                  <div className="box_general_3">
                    <div className="reviews-container">
                      <div className="row">
                        <div className="col-lg-3">
                          <div id="review_summary">
                            <strong>4.7</strong>
                            <div className="rating">
                              <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <small>Based on 4 reviews</small>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "90%" }}aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                          </div>
                          {/*<!-- /row -->*/}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                          </div>
                          {/*<!-- /row -->*/}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                          </div>
                          {/*<!-- /row -->*/}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                          </div>
                          {/*<!-- /row -->*/}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "0" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                          </div>
                          {/*<!-- /row -->*/}
                        </div>
                      </div>
                      {/*<!-- /row -->*/}

                      <hr/>

                      <div className="review-box clearfix">
                        <figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                          </div>
                          <div className="rev-info">
                      Admin – April 03, 2016:
                          </div>
                          <div className="rev-text">
                            <p>
                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*<!-- End review-box -->*/}

                      <div className="review-box clearfix">
                        <figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                          </div>
                          <div className="rev-info">
                      Ahsan – April 01, 2016
                          </div>
                          <div className="rev-text">
                            <p>
                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*<!-- End review-box -->*/}

                      <div className="review-box clearfix">
                        <figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                          </div>
                          <div className="rev-info">
                      Sara – March 31, 2016
                          </div>
                          <div className="rev-text">
                            <p>
                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*<!-- End review-box -->*/}
                    </div>
                    {/*<!-- End review-container -->*/}
                  </div>
                </div>
                {/*<!-- /section_2 -->*/}
              </div>
              {/*<!-- /col -->*/}
              <aside className="col-xl-4 col-lg-4" id="sidebar">
                <div className="box_general_3 booking">
                  <form>
                    <div className="title">
                      <h3>Book a Visit</h3>
                      <small>Monday to Friday 09.00am-06.00pm</small>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <input className="form-control" type="text" id="booking_date" data-lang="en" data-min-year="2017" data-max-year="2020" data-disabled-days="10/17/2017,11/18/2017"/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <input className="form-control" type="text" id="booking_time" />
                        </div>
                      </div>
                    </div>
                    {/*<!-- /row -->*/}
                    <ul className="treatments clearfix">
                      <li>
                        <div className="checkbox">
                          <input type="checkbox" className="css-checkbox" id="visit1" name="visit1"/>
                          <label htmlFor="visit1" className="css-label">Back Pain visit <strong>$55</strong></label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <input type="checkbox" className="css-checkbox" id="visit2" name="visit2"/>
                          <label htmlFor="visit2" className="css-label">Cardiovascular screen <strong>$55</strong></label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <input type="checkbox" className="css-checkbox" id="visit3" name="visit3"/>
                          <label htmlFor="visit3" className="css-label">Diabetes consultation <strong>$55</strong></label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <input type="checkbox" className="css-checkbox" id="visit4" name="visit4"/>
                          <label htmlFor="visit4" className="css-label">General visit <strong>$55</strong></label>
                        </div>
                      </li>
                    </ul>
                    <hr/>
                    <a href="booking-page.html" className="btn_1 full-width">Book Now</a>
                  </form>
                </div>
                {/*<!-- /box_general -->*/}
              </aside>
              {/*<!-- /asdide -->*/}
            </div>
            {/*<!-- /row -->*/}
          </div>
          {/*<!-- /container -->*/}
        </main>
        {/*<!-- /main -->*/}
  
        <footer>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <p>
                  <a href="index.html" title="Findoctor">
                    <img src="img/logo.png" data-retina="true" alt="" width="163" height="36" className="img-fluid"/>
                  </a>
                </p>
              </div>
              <div className="col-lg-3 col-md-4">
                <h5>About</h5>
                <ul className="links">
                  <li><a href="#0">About us</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="#0">FAQ</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Register</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <h5>Useful links</h5>
                <ul className="links">
                  <li><a href="#0">Doctors</a></li>
                  <li><a href="#0">Clinics</a></li>
                  <li><a href="#0">Specialization</a></li>
                  <li><a href="#0">Join as a Doctor</a></li>
                  <li><a href="#0">Download App</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <h5>Contact with Us</h5>
                <ul className="contacts">
                  <li><a href="tel://61280932400"><i className="icon_mobile"></i> + 61 23 8093 3400</a></li>
                  <li><a href="mailto:info@findoctor.com"><i className="icon_mail_alt"></i> help@findoctor.com</a></li>
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
            {/*<!--/row-->*/}
            <hr/>
            <div className="row">
              <div className="col-md-8">
                <ul id="additional_links">
                  <li><a href="#0">Terms and conditions</a></li>
                  <li><a href="#0">Privacy</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <div id="copy">© 2017 Findoctor</div>
              </div>
            </div>
          </div>
        </footer>
        {/*<!--/footer-->*/}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(withRouter(EventDescriptionContent2));

