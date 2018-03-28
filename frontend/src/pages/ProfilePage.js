import React, { Component } from 'react';
import SearchContainer from '../components/SearchContainer';
import Navigation from '../components//Navigation';
import UserDetails from '../components//UserDetails';
import UploadedDocuments from '../components//UploadedDocuments';
import SavedEvents from '../components//SavedEvents';
import Footer from '../components/Footer';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div style={{backgroundColor: '#F5F8FA'}}>
          <UserDetails/>
          <hr></hr>
          <SavedEvents/>
          <hr></hr>
          <UploadedDocuments/>
        </div>
        <Footer />
      </div>
    
    );
  }
}

export default ProfilePage;
