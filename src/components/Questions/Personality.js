import React, { Component } from 'react';
import classNames from 'classnames';

import Body from '../Body';
import Checkbox from '../Checkbox';
import Container from './elements/Container';

class Personality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.value,
    };
    this.addChoice = this.addChoice.bind(this);
  }

  addChoice(selected) {
    let values = this.state.values;
    if (!values) {
      values = [selected];
    } else if (values.includes(selected)) {
      values = values.filter(choice => choice !== selected);
    } else if (values.length < 2) {
      values.push(selected);
    }
    if (!values.length) values = null;
    this.setState({ values }, () => this.props.onClick(values));
  }

  render() {
    const { values } = this.state;
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        {this.props.number > 1 && <div className="back-chevron" onClick={this.props.goBack}>&#8592;</div>}
        <Body bold className="question-number">{questionNumber}</Body>
        <Body bold className="question-title">Which is more important for you?</Body>
        <Container>
          <div className="choices">
            <div className="choice">
              <Checkbox
                disabled={values && values.length === 2 && !values.includes('agreeableness-high')}
                isChecked={values ? values.includes('agreeableness-high') : false}
                onClick={() => this.addChoice('agreeableness-high')}
              />
              <Body className={classNames({
                disabled: values && values.length === 2 && !values.includes('agreeableness-high'),
              })}>Amiability and compromise</Body>
            </div>
            <div className="choice">
              <Checkbox
                disabled={values && values.length === 2 && !values.includes('emotionality-high')}
                isChecked={values ? values.includes('emotionality-high') : false}
                onClick={() => this.addChoice('emotionality-high')}
              />
              <Body className={classNames({
                disabled: values && values.length === 2 && !values.includes('emotionality-high'),
              })}>Compassion and warmth</Body>
            </div>
            <div className="choice">
              <Checkbox
                disabled={values && values.length === 2 && !values.includes('conscientiousness-high')}
                isChecked={values ? values.includes('conscientiousness-high') : false}
                onClick={() => this.addChoice('conscientiousness-high')}
              />
              <Body className={classNames({
                disabled: values && values.length === 2 && !values.includes('conscientiousness-high'),
              })}>Diligence and organisation</Body>
            </div>
            <div className="choice">
              <Checkbox
                disabled={values && values.length === 2 && !values.includes('honesty-high')}
                isChecked={values ? values.includes('honesty-high') : false}
                onClick={() => this.addChoice('honesty-high')}
              />
              <Body className={classNames({
                disabled: values && values.length === 2 && !values.includes('honesty-high'),
              })}>Honesty and morality</Body>
            </div>
            <div className="choice">
              <Checkbox
                disabled={values && values.length === 2 && !values.includes('extraversion-high')}
                isChecked={values ? values.includes('extraversion-high') : false}
                onClick={() => this.addChoice('extraversion-high')}
              />
              <Body className={classNames({
                disabled: values && values.length === 2 && !values.includes('extraversion-high'),
              })}>Sociability and enthusiasm</Body>
            </div>
            <div className="choice">
              <Checkbox
                disabled={values && values.length === 2 && !values.includes('openness-high')}
                isChecked={values ? values.includes('openness-high') : false}
                onClick={() => this.addChoice('openness-high')}
              />
              <Body className={classNames({
                disabled: values && values.length === 2 && !values.includes('openness-high'),
              })}>Creativity and open-mindedness</Body>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Personality;
