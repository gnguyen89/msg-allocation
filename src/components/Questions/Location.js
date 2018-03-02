import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';

class Location extends Component {
  render() {
    return (
      <div>
        <Body>Do you have a preference for your tutor's location?</Body>
        <div className="choice">
          <RadioButton
            isChecked={this.props.value === 'same-city'}
            onClick={() => this.props.onClick('same-city')}
          />
          <Body>Same city</Body>
        </div>
        <div className="choice">
          <RadioButton
            isChecked={this.props.value === 'same-timezone'}
            onClick={() => this.props.onClick('same-timezone')}
          />
          <Body>Same timezone</Body>
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

export default Location;
