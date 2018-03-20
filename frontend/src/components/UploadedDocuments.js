import React, { Component } from 'react';
import EventSmall from './EventSmall';

class UploadedDocuments extends Component {
  render() {
    return (
      <div>
        <div className="container margin_40_35">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
                <h4 style={{textAlign: 'left', paddingLeft: '10px', paddingBottom: '5px'}}>Uploaded Documents</h4>
                <div className='list_home width_80'>
                  <ul>
                    <li><a>Document 1</a></li>
                  </ul>
                </div> 
            </div>
            <div className="col-xl-6 col-lg-6">
                <h4 style={{textAlign: 'left', paddingLeft: '10px', paddingBottom: '5px'}}>Interested In</h4>
                <div className='tags' style={{float: 'left'}}>
                  <ul>
                    <li><a href='#'>Category 1</a></li>
                     <li><a href='#'>Category 2</a></li>
                  </ul>
                </div>
            </div>
          </div>
           <div><button className='btn_1'>Load more</button></div>
        </div>
      </div>
    );
  }
}

export default UploadedDocuments; 