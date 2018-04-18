import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import {
  REGISTER
} from "../constants/actionTypes";

import agent from "../agent";

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) =>
    dispatch({ type: REGISTER, payload: agent.Auth.register(data) }),
});

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    // this.goToLogin = this.goToLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      termChecked: false,
      canSubmit: false,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPass: "",
      occupation: "",
      work_place: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let canSubmit = 
      this.state.termChecked &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.email &&
      this.state.occupation &&
      this.state.work_place &&
      this.state.password &&
      this.state.password == this.state.confirmPass;

    this.setState({ canSubmit: canSubmit });

    if (canSubmit) {
      let data = {
        "email": this.state.email,
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "username": this.state.email,
        "password": this.state.password,
        "user_account": {
          "occupation": this.state.occupation,
          "work_place": this.state.work_place,
        }
      };

      this.props.onSubmit(data);
      this.props.history.push("/login");
    }
  }

  handleCheck(e) {
    let canSubmit = 
      e.target.checked &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.email &&
      this.state.occupation &&
      this.state.work_place &&
      this.state.password &&
      this.state.password == this.state.confirmPass;
    this.setState({ 
      termChecked: e.target.checked,
      canSubmit: canSubmit
    });
  }

  handleInputChanged(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const confirmPass = name=="confirmPass" ? value : this.state.confirmPass;

    let canSubmit = 
      this.state.termChecked &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.email &&
      this.state.occupation &&
      this.state.work_place &&
      this.state.password &&
      this.state.password == confirmPass;

    this.setState({
      [name]: value,
      canSubmit: canSubmit
    });
  }


  // bbrender() {
  //   return (
  //     <div>
  //       <main>
  //         <div className="bg_color_2">
  //           <div className="container margin_60_35">
  //             <div id="register">
  //               <h1>Please Register to Virtual Learning Centre!</h1>
  //               <div className="row justify-content-center">
  //                 <div className="col-md-5">
  //                   <div className="box_form">
  //                     <div className="form-group">
  //                       <label>Name</label>
  //                       <input type="text" className="form-control" placeholder="Your name"/>
  //                     </div>
  //                     <div className="form-group">
  //                       <label>Last name</label>
  //                       <input type="text" className="form-control" placeholder="Your last name"/>
  //                     </div>
  //                     <div className="form-group">
  //                       <label>Email</label>
  //                       <input type="email" className="form-control" placeholder="Your email address"/>
  //                     </div>
  //                     <div className="form-group">
  //                       <label>Password</label>
  //                       <input type="password" className="form-control" id="password1" placeholder="Your password"/>
  //                     </div>
  //                     <div className="form-group">
  //                       <label>Confirm password</label>
  //                       <input type="password" className="form-control" id="password2" placeholder="Confirm password"/>
  //                     </div>
  //                     <div id="pass-info" className="clearfix"></div>
  //                     <div className="checkbox-holder text-left">
  //                       <div className="checkbox_2">
  //                         <input type="checkbox" value="accept_2" id="check_2" name="check_2" checked/>
  //                         <label htmlFor="check_2">
  //                           <span>I Agree to the 
  //                             <strong><a href="/terms" target="_blank">Terms &amp; Conditions</a></strong>
  //                           </span>
  //                         </label>
  //                       </div>
  //                     </div>
  //                     <div className="form-group text-center add_top_30">
  //                       {/*<input className="btn_1" type="submit" value="Submit"/>*/}
  //                       <button onClick={this.goToLogin} className="btn_1">Submit</button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </main>
  //     </div>   
  //   );
  // }

  render() {
    const error = (this.state.canSubmit ? (<div></div>) : <div className="error_message">*Please fill in all fields below</div>);

    return(
      <main>
        <div id="hero_register">
          <div className="container margin_120_95">     
            <div className="row">
              <div className="col-lg-6">
                <h1>Its time to get involved!</h1>
                <p className="lead">Register as a user to enjoy the full benefits of this platform. Becoming a registered user gives you access to multiple features not available to regular users. As a registered user, you can:</p>
                <div className="box_feat_2">
                  <i className="pe-7s-map-2" />
                  <h3>Share your Experience!</h3>
                  <p>Upload your own experiences to the platform to become a source of knowledge for others</p>
                </div>
                <div className="box_feat_2">
                  <i className="pe-7s-date" />
                  <h3>Gain access to other learning events</h3>
                  <p>Have access to the complete details of learning events uploaded by other users</p>
                </div>
                <div className="box_feat_2">
                  <i className="pe-7s-phone" />
                  <h3>Access from any device</h3>
                  <p>You can access learning events any time, any where, on any device.</p>
                </div>
              </div>
              {/* /col */}
              <form className="col-lg-5 ml-auto" onSubmit={this.handleSubmit}>
                <div className="box_form">
                  {error}

                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Your name" name="first_name"
                      value={this.state.first_name} onChange={this.handleInputChanged} />
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Your last name" name="last_name"
                      value={this.state.last_name} onChange={this.handleInputChanged} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Your email address" name="email"
                      value={this.state.email} onChange={this.handleInputChanged} />
                  </div>
                  <div className="form-group">
                    <label>Password (min. length: 8)</label>
                    <input type="password" className="form-control" id="password1" placeholder="Your password" name="password"
                      value={this.state.password} onChange={this.handleInputChanged} />
                  </div>
                  <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password" className="form-control" id="password2" placeholder="Confirm password" name="confirmPass"
                      value={this.state.confirmPass} onChange={this.handleInputChanged} />
                  </div>
                  <div className="form-group">
                    <label>Occupation</label>
                    <input className="form-control" id="occupation" placeholder="Occupation" name="occupation"
                      value={this.state.occupation} onChange={this.handleInputChanged} />
                  </div>
                  <div className="form-group">
                    <label>Institution (or your working place)</label>
                    <input className="form-control" id="institution" placeholder="Institution" name="work_place"
                      value={this.state.work_place} onChange={this.handleInputChanged} />
                  </div>
                  <div id="pass-info" className="clearfix"></div>
                  <div className="checkbox-holder text-left">
                    <div className="checkbox_2">
                      <input type="checkbox" id="check_2" name="termChecked" value="accept_2"
                        checked={this.state.termChecked} onChange={this.handleCheck}/>
                      <label htmlFor="check_2">
                        <span>I agree to the 
                          <strong><a href="/terms" target="_blank"> Terms &amp; Conditions</a></strong>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group text-center add_top_30">
                    {/*<input className="btn_1" type="submit" value="Submit"/>*/}
                    <button type="submit" onClick={this.handleSubmit} className="btn_1" disabled={!this.state.canSubmit}>Submit</button>
                  </div>
                </div>
                {/* /box_form */}
              </form>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /hero_register */}
      </main>);
  }
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm));
