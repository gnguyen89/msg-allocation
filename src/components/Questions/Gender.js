import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';

class Gender extends Component {
  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        <Body bold style={{ color: '#aa1e23' }}>{questionNumber}</Body>
        <Body bold style={{ fontSize: '26px' }}>DO YOU HAVE A PREFERENCE FOR A CERTAIN GENDER?</Body>
        <div style={{ height: '300px', width: '100%', backgroundColor: '#4f6987', margin: '20px 0px' }}></div>
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
