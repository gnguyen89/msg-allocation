import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';
import BigCircle from '../BigCircle';
import Container from './elements/Container';

class StudyStyle extends Component {
  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        {this.props.number > 1 && <div className="back-chevron" onClick={this.props.goBack}>&#8592;</div>}
        <Body bold className="question-number">{questionNumber}</Body>
        <Body bold className="question-title">What your preferred study style?</Body>
        {/* <div className="image">
          <img src="./images/student.png" height="220px" />
        </div> */}
        <Container>
          <div className="image">
            <img src="./images/illustrations/0_illustration.png" width="350px" />
          </div>
          <div className="choices-2">
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/5_Auditory.png"
                selected="./images/icons/selected/5_Auditory.png"
              />
              <Body className="choice-subtitle">Auditory</Body>
            </div>
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/5_Visual.png"
                selected="./images/icons/selected/5_Visual.png"
              />
              <Body className="choice-subtitle">Visual</Body>
            </div>
          </div>
          <div className="choices-2">
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/5_Kinesthietic.png"
                selected="./images/icons/selected/5_Kinesthietic.png"
              />
              <Body className="choice-subtitle">Kinesthetic</Body>
            </div>
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/5_Read and write.png"
                selected="./images/icons/selected/5_Read and write.png"
              />
              <Body className="choice-subtitle">Read and write</Body>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default StudyStyle;
