import React, { Component } from 'react';
import './style.css';

class CompletePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="complete-page">
        <div className="thank-you">
          <p>Thank you. We will find a tutor who best matches your preferences!</p> 
        </div>
      </div>
    );
  }
}

export default CompletePage;
