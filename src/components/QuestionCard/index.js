import React, { Component } from 'react';
import './style.css';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="question-card">
        {this.props.children}
      </div>
    );
  }
}

export default QuestionCard;
