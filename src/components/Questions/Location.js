import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';

class Location extends Component {
  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        {this.props.number > 1 && <div className="back-chevron" onClick={this.props.goBack}>&#8592;</div>}
        <Body bold style={{ color: '#aa1e23' }}>{questionNumber}</Body>
        <Body bold className="question-title">WHERE WOULD YOU LIKE YOUR TUTOR TO BE LOCATED?</Body>
        <div className="image"></div>
        <div className="choices">
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
      </div>
    );
  }
}

export default Location;
