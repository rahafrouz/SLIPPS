import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
  }
  
  goToProfile() {
    this.props.history.push("/profile");
  }

  render() {
    return (
      <div>
        <main>
          <div className="bg_color_2">
            <div className="container margin_60_35">
              <div id="login-2">
                <h1>Please login to find Learning Events!</h1>
            
                <div className="box_form clearfix">
                  <div className="box_login">
                    <a href="#0" className="social_bt facebook">Login with Facebook</a>
                    <a href="#0" className="social_bt google">Login with Google</a>
                    <a href="#0" className="social_bt linkedin">Login with Linkedin</a>
                  </div>
                  <div className="box_login last">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Your email address"/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Your password"/>
                      <a href="#0" className="forgot"><small>Forgot password?</small></a>
                    </div>
                    <div className="form-group">
                      {/*<input className="btn_1" type="submit" value="Login"/>*/}
                      <button onClick={this.goToProfile} className="btn_1">Login</button>
                    </div>
                  </div>
                </div>
                <p className="text-center link_bright">
              Do not have an account yet?
                  <a href="/register"><strong>Register now!</strong></a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>   
    );
  }
}

export default withRouter(LoginForm);
