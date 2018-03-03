import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';

class Gender extends Component {
  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        {this.props.number > 1 && <div className="back-chevron" onClick={this.props.goBack}>&#8592;</div>}
        <Body bold style={{ color: '#aa1e23' }}>{questionNumber}</Body>
        <Body bold className="question-title">DO YOU HAVE A PREFERENCE FOR A CERTAIN GENDER?</Body>
        <div className="image">
          <img src="./images/student.png" height="220px" />
        </div>
        <div className="choices">
          <div className="choice">
            <RadioButton
              isChecked={this.props.value === 'male'}
              onClick={() => this.props.onClick('male')}
            />
            <Body>Male</Body>
          </div>
          <div className="choice">
            <RadioButton
              isChecked={this.props.value === 'female'}
              onClick={() => this.props.onClick('female')}
            />
            <Body>Female</Body>
          </div>
          <div className="choice">
            <RadioButton
              isChecked={this.props.value === 'other'}
              onClick={() => this.props.onClick('other')}
            />
            <Body>Other</Body>
          </div>
          <div className="choice">
            <RadioButton
              isChecked={this.props.value === 'none'}
              onClick={() => this.props.onClick('none')}
            />
            <Body>Doesn't matter</Body>
          </div>
        </div>
      </div>
    );
  }
}

export default Gender;
