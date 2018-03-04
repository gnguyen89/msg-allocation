import React, { Component } from 'react';
import './style.css';

import Body from '../Body';

class CompletePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="complete-page">
        <div className="complete-text">
          <Body bold className="thank-you-text">Thank you!</Body>
          <Body bold className="success-text">The form submitted successfully</Body>
          <img src="./images/grey-wave.png" style={{ marginTop: '1rem' }} width="100px"/>
          <br/>
          <img src="./images/thank-you-01.png" className="thank-you-graphic" style={{ marginTop: '3.2rem' }}/>
        </div>
        <div className="diagonal"/>
      </div>
    );
  }
}

export default CompletePage;
