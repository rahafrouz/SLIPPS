import React, { Component } from 'react';

class PasswordChange extends Component {
  render() {
    return (
      <aside className="col-xl-4 col-lg-4" id="sidebar">
          <div className="box_general_3 booking">
              <div className="title" style={{paddingTop: '15px', paddingBottom: '10px'}} >
                <h4 style={{color: '#fff'}}>Change Password</h4>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Current password" name="current_password" id="current_password"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="New password" name="new_password" id="new_password"/>
                  </div>
                </div>
              </div>
               <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm new password" name="confirm_new_password" id="confirm_new_password"/>
                  </div>
                </div>
              </div>
              <button className="btn_1 full-width">Update</button>
        
          </div>
        </aside>
  
    );
  }
}

export default PasswordChange; 