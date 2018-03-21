import React, { Component } from 'react';

class DocumentDescription extends Component {
  render() {
    return (  
    <div>
    <h5 style={{textAlign: 'left', paddingLeft: '10px', paddingBottom: '5px', paddingTop: '20px'}}>Description</h5>					
		<textarea class="document_description"></textarea>					
		</div>
    );
  }
}

export default DocumentDescription; 