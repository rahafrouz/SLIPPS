import React, { Component } from 'react';

class LoginForm extends Component {
  
  goToProfile = () => {
    window.location = '/profile';
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
                    <input className="btn_1" type="button" value="Login" onClick="redirect('/profile');"/>
                    <button onClick={this.goToProfile()} className="button">Login</button>
                  </div>
                </div>
              </div>
            
            <p className="text-center link_bright">Do not have an account yet? <a href="#0"><strong>Register now!</strong></a></p>
          </div>
        </div>
      </div>
    </main>
     </div>   
    );
  }
}

export default LoginForm;