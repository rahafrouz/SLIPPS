import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import agent from "../agent";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { store } from "../store";
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  REDIRECT
} from "../constants/actionTypes";
import ListErrors from "./ListErrors";

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

class LoginForm extends Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
      this.props.history.push("/profile");
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  // constructor(props) {
  //   super(props);
  //   this.goToProfile = this.goToProfile.bind(this);
  // }
  
  // goToProfile() {
  //   // this.props.history.push("/profile");
  // }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    return (
      <div>
        <main>
          <div className="bg_color_2">
            <div className="container margin_60_35">
              <div id="login-2">
                <h1>Please login to find Learning Events!</h1>
            
                <div className="box_form clearfix">
                  <ListErrors errors={this.props.errors} />

                  <div className="box_login">
                    <a href="#0" className="social_bt facebook">Login with Facebook</a>
                    <a href="#0" className="social_bt google">Login with Google</a>
                    <a href="#0" className="social_bt linkedin">Login with Linkedin</a>
                  </div>
                  <form className="box_login last" onSubmit={this.submitForm(email, password)}>
                    <div className="form-group">
                      <input className="form-control" placeholder="Your email address" value={email} onChange={this.changeEmail} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control"
                        placeholder="Your password"
                        value={password}
                        onChange={this.changePassword} 
                      />
                      <a href="#0" className="forgot"><small>Forgot password?</small></a>
                    </div>
                    <div className="form-group">
                      <button className="btn_1 btn-lg btn-primary pull-xs-right" type="submit" disabled={this.props.inProgress}>
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
                <p className="text-center link_bright">
                  <span>Don't have an account yet? </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
