import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';

class Gender extends Component {
  render() {
    return (
      <div>
        <Body>Do you have a preference for a certain gender?</Body>
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
    );
  }
}

export default Gender;
