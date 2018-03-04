import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';
import BigCircle from '../BigCircle';
import Container from './elements/Container';

class Location extends Component {
  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        {this.props.number > 1 && <div className="back-chevron" onClick={this.props.goBack}>&#8592;</div>}
        <Body bold className="question-number">{questionNumber}</Body>
        <Body bold className="question-title">Where do you prefer your tutor to be located?</Body>
        <Container>
        <div className="image">
          <img src="./images/illustrations/2_illustration.png" width="300px" />
        </div>
        <div className="choices-2">
          <div className="choice-2">
            <BigCircle
              img="./images/icons/default/2_Same city.png"
              selected="./images/icons/selected/2_Same city.png"
            />
            <Body className="choice-subtitle">Same city</Body>
          </div>
          <div className="choice-2">
            <BigCircle
              img="./images/icons/default/2_Same country.png"
              selected="./images/icons/selected/2_Same country.png"
            />
            <Body className="choice-subtitle">Same country</Body>
          </div>
        </div>
        <div className="choices-2">
          <div className="choice-2">
            <BigCircle
              img="./images/icons/default/2_Same timzone.png"
              selected="./images/icons/selected/2_Same timzone.png"
            />
            <Body className="choice-subtitle">Same timezone</Body>
          </div>
          <div className="choice-2">
            <BigCircle
              img="./images/icons/default/4_Doesn't matter.png"
              selected="./images/icons/selected/4_Doesn't matter.png"
            />
            <Body className="choice-subtitle">Don't mind</Body>
          </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default Location;
